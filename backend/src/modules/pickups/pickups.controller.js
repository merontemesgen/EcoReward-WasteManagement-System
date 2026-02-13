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

