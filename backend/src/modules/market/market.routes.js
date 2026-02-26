const router = require("express").Router();
const auth = require("../../middlewares/auth");

// MVP static demand feed
router.get("/demand", auth, async (req, res) => {
  // Later: replace with DB table or DS feed
  res.json([
    { material_type: "Plastic", demand_score: 0.92, unit: "kg", suggested_rate: 3.0 },
    { material_type: "Glass", demand_score: 0.74, unit: "kg", suggested_rate: 2.5 },
    { material_type: "Paper", demand_score: 0.68, unit: "kg", suggested_rate: 1.8 },
    { material_type: "Metal", demand_score: 0.88, unit: "kg", suggested_rate: 4.2 }
  ]);
});

module.exports = router;