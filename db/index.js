require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,
  define: {
    timestamps: false
  }
})

async function checkDB() {
  try {
    await sequelize.authenticate()
    console.log('Connection successful!!')
  } catch (error) {
    console.log(error)
  }
}

async function syncModels() {
  try {
    await sequelize.sync({force: true})
    console.log('Models Syncronized!!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sequelize,
  checkDB,
  syncModels
}