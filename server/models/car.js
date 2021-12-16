'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      car.hasMany(models.image)
    }
  };
  car.init({
    name: {
      type: DataTypes.STRING,
      validate: { 
        notEmpty: {
          message: "name cant be empty"
        },
      },
    },
    harga_sewa: {
      type: DataTypes.INTEGER,
      validate: { 
        notEmpty: {
          message: "harga cant be empty"
        },
      },
    },
    penumpang: {
      type: DataTypes.INTEGER,
      validate: { 
        notEmpty: {
          message: "penumpang cant be empty"
        },
      },
    },
    bagasi: DataTypes.BOOLEAN,
    pintu: {
      type: DataTypes.INTEGER,
      validate: { 
        notEmpty: {
          message: "pintu cant be empty"
        },
      },
    },
    ac: DataTypes.BOOLEAN,
    type: {
      type: DataTypes.STRING,
      validate: { 
        notEmpty: {
          message: "type cant be empty"
        },
      },
    },
    deskripsi: {
      type: DataTypes.STRING,
      validate: { 
        notEmpty: {
          message: "deskripsi cant be empty"
        },
      },
    },
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};