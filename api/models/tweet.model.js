const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index')

const Tweet = sequelize.define('tweet', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Tweet