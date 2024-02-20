const { checkDB, syncModels } = require('./db/index')
const addRelations = require('./db/relations')


async function dbConnect() {
  try {
    await checkDB()
    addRelations()
    await syncModels()
  } catch (error) {
    console.log(error)
  }
}

dbConnect()