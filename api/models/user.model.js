const { DataTypes } = require('sequelize')
const { sequelize } = require('../../db/index')

const User = sequelize.define('user', {
  userName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }, 
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    validate: (value) => {if(value < 18) throw new Error('Users must be at least 18 yeas old!') }
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  }
})

module.exports = User