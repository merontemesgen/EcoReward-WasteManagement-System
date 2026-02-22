'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pickup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pickup.init({
    citizen_id: DataTypes.INTEGER,
    collector_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    waste_type: DataTypes.STRING,
    estimated_kg: DataTypes.FLOAT,
    recycling_center_id: DataTypes.INTEGER,
    material_type: DataTypes.STRING,
    unit_name: DataTypes.STRING,
    unit_count: DataTypes.INTEGER,
    unit_price_snapshot: DataTypes.DECIMAL(10, 2),
    calculated_payout: DataTypes.DECIMAL(10, 2),
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pickup',
  });
  return Pickup;
};