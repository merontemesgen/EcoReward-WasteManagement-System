const router = require("express").Router();
const auth = require("../../middlewares/auth");
const requireRole = require("../../middlewares/requireRole");
const { createPickup, listMyPickups } = require("./pickups.controller");

// Citizen creates pickup
router.post("/", auth, requireRole("CITIZEN"), createPickup);

// Citizen views own pickups
router.get("/mine", auth, requireRole("CITIZEN"), listMyPickups);

module.exports = router;
