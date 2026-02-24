const { Op } = require("sequelize");
const { Pickup, sequelize } = require("../../../models");
const { LedgerEntry } = require("../../../models");
const { User } = require("../../../models");
exports.getMetrics = async (req, res) => {
  try {
    const { from, to } = req.query;

    const dateFilter = {};

    if (from && to) {
      dateFilter.createdAt = {
        [Op.between]: [new Date(from), new Date(to)]
      };
    }

    // ----------------------------
    // Counts by status
    // ----------------------------
    const rows = await Pickup.findAll({
      where: dateFilter,
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

    // ----------------------------
    // Totals
    // ----------------------------
    const total_pickups = await Pickup.count({ where: dateFilter });

    const total_paid_pickups = await Pickup.count({
      where: { ...dateFilter, status: "PAID" }
    });

    const completion_rate =
      total_pickups > 0
        ? Number(((total_paid_pickups / total_pickups) * 100).toFixed(2))
        : 0;
    // Avg response time (REQUESTED -> ASSIGNED) in decimal hours
const responseRows = await Pickup.findAll({
  where: { ...dateFilter, status: "ASSIGNED" },
  attributes: [
    [
      sequelize.fn(
        "AVG",
        sequelize.fn(
          "TIMESTAMPDIFF",
          sequelize.literal("MINUTE"),
          sequelize.col("createdAt"),
          sequelize.col("updatedAt")
        )
      ),
      "avg_minutes"
    ]
  ]
});

const avg_minutes = Number(responseRows[0]?.get("avg_minutes")) || 0;

const avg_response_time_hours = Number((avg_minutes / 60).toFixed(2));
    const total_paid_payout = await Pickup.sum("calculated_payout", {
      where: { ...dateFilter, status: "PAID" }
    });

    const total_transferred_payout = await Pickup.sum("calculated_payout", {
      where: { ...dateFilter, status: "TRANSFERRED" }
    });

    const total_estimated_kg = await Pickup.sum("estimated_kg", {
      where: dateFilter
    });

    // ----------------------------
    // Ledger Metrics
    // ----------------------------
    const total_ledger_entries = await LedgerEntry.count();

    const total_credit_amount = await LedgerEntry.sum("amount", {
      where: { entry_type: "CREDIT" }
    });

    const total_users = await User.count();

    const avg_tokens_per_user =
      total_users > 0
        ? Number((Number(total_credit_amount || 0) / total_users).toFixed(2))
        : 0;

    // ----------------------------
    // Environmental Metrics
    // ----------------------------
    const transferred_kg = await Pickup.sum("estimated_kg", {
      where: { ...dateFilter, status: "TRANSFERRED" }
    });

    const received_kg = await Pickup.sum("estimated_kg", {
      where: { ...dateFilter, status: "RECEIVED" }
    });

    const wtCountRows = await Pickup.findAll({
      where: dateFilter,
      attributes: [
        "waste_type",
        [sequelize.fn("COUNT", sequelize.col("id")), "count"]
      ],
      group: ["waste_type"]
    });

    const waste_type_counts = wtCountRows.reduce((acc, r) => {
      acc[r.waste_type] = Number(r.get("count"));
      return acc;
    }, {});

    const wtKgRows = await Pickup.findAll({
      where: dateFilter,
      attributes: [
        "waste_type",
        [sequelize.fn("SUM", sequelize.col("estimated_kg")), "kg"]
      ],
      group: ["waste_type"]
    });

    const waste_type_kg = wtKgRows.reduce((acc, r) => {
      acc[r.waste_type] = Number(r.get("kg") || 0);
      return acc;
    }, {});

    const totalKg =
      Object.values(waste_type_kg).reduce((a, b) => a + b, 0) || 1;

    const waste_type_percent = Object.fromEntries(
      Object.entries(waste_type_kg).map(([k, v]) => [
        k,
        Math.round((v / totalKg) * 100)
      ])
    );
    // Collector earnings leaderboard (sum of PAID payouts per collector)
const collectorRows = await Pickup.findAll({
  where: { ...dateFilter, status: "PAID" },
  attributes: [
    "collector_id",
    [sequelize.fn("SUM", sequelize.col("calculated_payout")), "earnings"],
    [sequelize.fn("COUNT", sequelize.col("id")), "paid_pickups"]
  ],
  group: ["collector_id"],
  order: [[sequelize.literal("earnings"), "DESC"]]
});

const collector_earnings = collectorRows.map(r => ({
  collector_id: r.collector_id,
  earnings: Number(r.get("earnings") || 0),
  paid_pickups: Number(r.get("paid_pickups") || 0)
}));


// Hotspots: top addresses by pickup volume (for maps / charts)
const hotspotRows = await Pickup.findAll({
  where: dateFilter,
  attributes: [
    "address",
    [sequelize.fn("COUNT", sequelize.col("id")), "count"],
    [sequelize.fn("SUM", sequelize.col("estimated_kg")), "kg"]
  ],
  group: ["address"],
  order: [[sequelize.literal("count"), "DESC"]],
  limit: 5
});

const hotspots = hotspotRows.map(r => ({
  address: r.address,
  count: Number(r.get("count") || 0),
  kg: Number(r.get("kg") || 0)
}));

    // ----------------------------
    // Active Users (last 30 days)
    // ----------------------------
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const active_users = await Pickup.count({
      distinct: true,
      col: "citizen_id",
      where: {
        createdAt: { [Op.gte]: thirtyDaysAgo }
      }
    });
    const avg_confidence = await Pickup.sum("ai_confidence_score", {
  where: dateFilter
});

const confidence_count = await Pickup.count({
  where: {
    ...dateFilter,
    ai_confidence_score: { [Op.not]: null }
  }
});

const average_ai_confidence = confidence_count
  ? Number((avg_confidence / confidence_count).toFixed(2))
  : 0;

    // ----------------------------
    // Final Response
    // ----------------------------
    return res.json({
      total_pickups,
      counts_by_status,
      completion_rate,
      avg_response_time_hours,
      total_paid_payout: Number(total_paid_payout || 0),
      total_transferred_payout: Number(total_transferred_payout || 0),
      total_estimated_kg: Number(total_estimated_kg || 0),
      total_paid_pickups,
      total_ledger_entries,
      total_credit_amount: Number(total_credit_amount || 0),
      avg_tokens_per_user,
      transferred_kg: Number(transferred_kg || 0),
      received_kg: Number(received_kg || 0),
      collector_earnings,
      hotspots,
      active_users,
      average_ai_confidence,
      waste_type_counts,
      waste_type_kg,
      waste_type_percent
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

exports.getConfidenceTrend = async (req, res) => {
  try {
    const days = Number(req.query.days || 7);

    const start = new Date();
    start.setDate(start.getDate() - days);

    const rows = await Pickup.findAll({
      where: {
        ai_confidence_score: { [Op.not]: null },
        createdAt: { [Op.gte]: start }
      },
      attributes: [
        [sequelize.fn("DATE", sequelize.col("createdAt")), "day"],
        [sequelize.fn("AVG", sequelize.col("ai_confidence_score")), "avg_confidence"],
        [sequelize.fn("COUNT", sequelize.col("id")), "count"]
      ],
      group: [sequelize.fn("DATE", sequelize.col("createdAt"))],
      order: [[sequelize.literal("day"), "ASC"]]
    });

    const trend = rows.map(r => ({
      day: r.get("day"),
      avg_confidence: Number(Number(r.get("avg_confidence") || 0).toFixed(2)),
      count: Number(r.get("count") || 0)
    }));

    return res.json({ days, trend });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
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
