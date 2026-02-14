const Joi = require("joi");
const { Pickup } = require("../../../models");

const createSchema = Joi.object({
  address: Joi.string().min(5).required(),
  waste_type: Joi.string().min(2).required(),
  estimated_kg: Joi.number().positive().required()
});

exports.createPickup = async (req, res) => {
  const { error, value } = createSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });

  const pickup = await Pickup.create({
    citizen_id: req.user.id,        // from JWT
    address: value.address,
    waste_type: value.waste_type,
    estimated_kg: value.estimated_kg,
    status: "REQUESTED"
  });
  

  return res.status(201).json(pickup);
};

exports.listMyPickups = async (req, res) => {
  const pickups = await Pickup.findAll({
    where: { citizen_id: req.user.id },
    order: [["createdAt", "DESC"]]
  });

  return res.json(pickups);
};
//console.log(Object.keys(require("../../../models")));
exports.listAvailablePickups = async (req, res) => {
  const pickups = await Pickup.findAll({
    where: { status: "REQUESTED" },
    order: [["createdAt", "ASC"]]
  });
  res.json(pickups);
};

exports.listAllPickups = async (req, res) => {
  const pickups = await Pickup.findAll({
    order: [["createdAt", "DESC"]]
  });
  res.json(pickups);
};
exports.assignPickup = async (req, res) => {
  const pickup = await Pickup.findByPk(req.params.id);

  if (!pickup) return res.status(404).json({ message: "Pickup not found" });

  if (pickup.status !== "REQUESTED") {
    return res.status(400).json({ message: "Pickup cannot be assigned" });
  }

  // if a COLLECTOR assigns, assign to themselves
  // if ADMIN assigns, allow passing collector_id optionally later; for now assign to admin? NO.
  if (req.user.role === "COLLECTOR") {
    pickup.collector_id = req.user.id;
  }

  pickup.status = "ASSIGNED";
  await pickup.save();

  res.json(pickup);
};
exports.markCollected = async (req, res) => {
  const pickup = await Pickup.findByPk(req.params.id);

  if (!pickup) return res.status(404).json({ message: "Pickup not found" });

  // ownership check
  if (pickup.collector_id !== req.user.id) {
    return res.status(403).json({ message: "Not your assigned pickup" });
  }

  // status check
  if (pickup.status !== "ASSIGNED") {
    return res.status(400).json({ message: "Pickup must be ASSIGNED to mark as COLLECTED" });
  }

  pickup.status = "COLLECTED";
  await pickup.save();

  return res.json(pickup);
};

exports.markDelivered = async (req, res) => {
  const pickup = await Pickup.findByPk(req.params.id);

  if (!pickup) return res.status(404).json({ message: "Pickup not found" });

  // ownership check
  if (pickup.collector_id !== req.user.id) {
    return res.status(403).json({ message: "Not your assigned pickup" });
  }

  // status check
  if (pickup.status !== "COLLECTED") {
    return res.status(400).json({ message: "Pickup must be COLLECTED to mark as DELIVERED" });
  }

  pickup.status = "DELIVERED";
  await pickup.save();

  return res.json(pickup);
};




