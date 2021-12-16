'use strict';
const {
  Model
} = require('sequelize');
const { encryptPwd } = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.cart)
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      // validate: { 
      //   notEmpty: {
      //     message: "name cant be empty"
      //   },
      // },
    },
    email: {
      type: DataTypes.STRING,
      // validate: { 
      //   notEmpty: {
      //     message: "name cant be empty"
      //   },
      //   isEmail: {
      //     message: "Must email format.",
      //   },
      // },
    },
    password: {
      type: DataTypes.STRING,
      // validate: { 
      //   notEmpty: {
      //     message: "name cant be empty"
      //   },
      // },
    },
    birthdate: DataTypes.DATE,
    gender: DataTypes.STRING,
    avatart: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      // validate: { 
      //   notEmpty: {
      //     message: "name cant be empty"
      //   },
      // },
    },
  }, {
    hooks: {
      beforeCreate: function (user, options) {
        user.password = encryptPwd(user.password)
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};