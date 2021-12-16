'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  line_cars.init({
    status: DataTypes.STRING,
    carId: DataTypes.INTEGER,
    orderName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'line_cars',
  });
  return line_cars;
};