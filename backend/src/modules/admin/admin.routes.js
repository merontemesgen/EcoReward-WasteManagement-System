const router = require("express").Router();
const auth = require("../../middlewares/auth");
const requireRole = require("../../middlewares/requireRole");
const { getMetrics } = require("./admin.controller");
const { getRecentPickups } = require("./admin.controller");
router.get("/metrics", auth, requireRole("ADMIN"), getMetrics);

router.get("/dashboard", auth, requireRole("ADMIN"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});
router.get("/recent", auth, requireRole("ADMIN"), getRecentPickups);

module.exports = router;
