const { Pickup, sequelize } = require("../../../models");

exports.getMetrics = async (req, res) => {
  // counts by status
  const rows = await Pickup.findAll({
    attributes: [
      "status",
      [sequelize.fn("COUNT", sequelize.col("id")), "count"]
    ],
    group: ["status"]
  });

  const counts_by_status = rows.reduce((acc, r) => {
    acc[r.status] = Number(r.get("count"));
    return acc;
  }, {});

  // totals
  const total_pickups = await Pickup.count();

  const total_paid_payout = await Pickup.sum("calculated_payout", {
    where: { status: "PAID" }
  });

  const total_transferred_payout = await Pickup.sum("calculated_payout", {
    where: { status: "TRANSFERRED" }
  });

  const total_estimated_kg = await Pickup.sum("estimated_kg");

  return res.json({
    total_pickups,
    counts_by_status,
    total_paid_payout: Number(total_paid_payout || 0),
    total_transferred_payout: Number(total_transferred_payout || 0),
    total_estimated_kg: Number(total_estimated_kg || 0)
  });
};
exports.getRecentPickups = async (req, res) => {
  const rows = await Pickup.findAll({
    attributes: [
      "id",
      "address",
      "status",
      "calculated_payout",
      "updatedAt"
    ],
    order: [["updatedAt", "DESC"]],
    limit: 10
  });

  return res.json(rows);
};
