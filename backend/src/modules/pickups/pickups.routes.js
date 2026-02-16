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
const { settlePickup } = require("./pickups.controller");

router.patch(
  "/:id/settle",
  auth,
  requireRole("ADMIN"),
  settlePickup
);
const { getPickupById } = require("./pickups.controller");
const { markReceived } = require("./pickups.controller");
const { markPaid } = require("./pickups.controller");
const { listMyAssignedPickups } = require("./pickups.controller");


router.get("/:id", auth, getPickupById);
router.patch(
  "/:id/receive",
  auth,
  requireRole("ADMIN"),
  markReceived
);
router.patch(
  "/:id/pay",
  auth,
  requireRole("ADMIN"),
  markPaid
);
router.get(
  "/assigned/me",
  auth,
  requireRole("COLLECTOR"),
  listMyAssignedPickups
);



router.post("/", auth, requireRole("CITIZEN"), createPickup);
router.get("/mine", auth, requireRole("CITIZEN"), listMyPickups);

// Collector/Admin can see REQUESTED pickups
router.get("/available", auth, requireRole("COLLECTOR", "ADMIN"), listAvailablePickups);

// Admin can see everything
router.get("/", auth, requireRole("ADMIN"), listAllPickups);

module.exports = router;

