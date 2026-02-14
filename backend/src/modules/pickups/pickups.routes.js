const router = require("express").Router();
const auth = require("../../middlewares/auth");
const requireRole = require("../../middlewares/requireRole");
const {
  createPickup,
  listMyPickups,
  listAvailablePickups,
  listAllPickups
} = require("./pickups.controller");

const { assignPickup } = require("./pickups.controller");

router.patch(
  "/:id/assign",
  auth,
  requireRole("ADMIN", "COLLECTOR"),
  assignPickup
);
const { markCollected, markDelivered } = require("./pickups.controller");

router.patch(
  "/:id/collect",
  auth,
  requireRole("COLLECTOR"),
  markCollected
);

router.patch(
  "/:id/deliver",
  auth,
  requireRole("COLLECTOR"),
  markDelivered
);


router.post("/", auth, requireRole("CITIZEN"), createPickup);
router.get("/mine", auth, requireRole("CITIZEN"), listMyPickups);

// Collector/Admin can see REQUESTED pickups
router.get("/available", auth, requireRole("COLLECTOR", "ADMIN"), listAvailablePickups);

// Admin can see everything
router.get("/", auth, requireRole("ADMIN"), listAllPickups);

module.exports = router;

