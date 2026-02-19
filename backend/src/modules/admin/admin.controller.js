const { Pickup, sequelize } = require("../../../models");
const { LedgerEntry } = require("../../../models");

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
  const total_ledger_entries = await LedgerEntry.count();

  const total_credit_amount = await LedgerEntry.sum("amount", {
  where: { entry_type: "CREDIT" }
});

const total_paid_pickups = await Pickup.count({
  where: { status: "PAID" }
});
// 1) Total kg for key statuses
const transferred_kg = await Pickup.sum("estimated_kg", { where: { status: "TRANSFERRED" } });
const received_kg = await Pickup.sum("estimated_kg", { where: { status: "RECEIVED" } });

// 2) Waste type distribution (counts)
const wtCountRows = await Pickup.findAll({
  attributes: ["waste_type", [sequelize.fn("COUNT", sequelize.col("id")), "count"]],
  group: ["waste_type"]
});

const waste_type_counts = wtCountRows.reduce((acc, r) => {
  acc[r.waste_type] = Number(r.get("count"));
  return acc;
}, {});

// 3) Waste type distribution (kg)
const wtKgRows = await Pickup.findAll({
  attributes: ["waste_type", [sequelize.fn("SUM", sequelize.col("estimated_kg")), "kg"]],
  group: ["waste_type"]
});

const waste_type_kg = wtKgRows.reduce((acc, r) => {
  acc[r.waste_type] = Number(r.get("kg") || 0);
  return acc;
}, {});



  return res.json({
    total_pickups,
    counts_by_status,
    total_paid_payout: Number(total_paid_payout || 0),
    total_transferred_payout: Number(total_transferred_payout || 0),
    total_estimated_kg: Number(total_estimated_kg || 0),
    total_paid_pickups,
    total_ledger_entries,
    total_credit_amount: Number(total_credit_amount || 0),
    transferred_kg: Number(transferred_kg || 0),
    received_kg: Number(received_kg || 0),
    waste_type_counts,
    waste_type_kg,

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
exports.getLedgerAudit = async (req, res) => {
  const limit = Math.min(Number(req.query.limit || 50), 200);

  const rows = await LedgerEntry.findAll({
    attributes: [
      "id",
      "user_id",
      "pickup_id",
      "entry_type",
      "amount",
      "currency",
      "description",
      "createdAt"
    ],
    order: [["createdAt", "DESC"]],
    limit
  });

  return res.json(rows);
};
