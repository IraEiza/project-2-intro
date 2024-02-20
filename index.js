const { checkDB, syncModels } = require('./db/index')
const addRelations = require('./db/relations')
const express = require('express')


async function dbConnect() {
  try {
    await checkDB()
    addRelations()
    await syncModels()
  } catch (error) {
    console.log(error)
  }
}

const app = express()
const port = 3000

app.listen(port, async () => {
  try {
    await dbConnect()
    console.log(`--> Server is running in port ${port}`)
  } catch (error) {
    console.log(error)
  }
})