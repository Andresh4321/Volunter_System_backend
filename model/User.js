const { DataTypes } = require("sequelize");
const sequelize = require("../database/Nutrisphere");

const Users = sequelize.define("Users", {
   id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
   },
   username: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,

  },

});

module.exports = Users;