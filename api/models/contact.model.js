const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index')

const Contact = sequelize.define('contact', {
  phone: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Contact