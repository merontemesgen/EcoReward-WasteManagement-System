const router = require("express").Router();
const auth = require("../../middlewares/auth");
const requireRole = require("../../middlewares/requireRole");
const { getMetrics } = require("./admin.controller");

router.get("/metrics", auth, requireRole("ADMIN"), getMetrics);

router.get("/dashboard", auth, requireRole("ADMIN"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

module.exports = router;
