// C (Create) R (Read) U (Update) D (Delete)
// POST       GET      PUT/PATCH  DELETE

const User = require('../models/user.model')
const Contact = require('../models/contact.model')

const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: req.query,
      attributes: {
        exclude: ['password', 'email']
      },
      include: Contact
    })
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
  }
}

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: {
        exclude: ['password']
      },
      include: Contact 
    })

    if (!user) {
      return res.status(404).send('User not found')
    }

    return res.status(200).json(user)

  } catch (error) {
    console.log(error)
  }
}

const createUser = async (req, res) => {
  try {

    const saltRounds = bcrypt.genSaltSync(parseInt(10))
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    req.body.password = hashedPassword
    
    const newUser = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age
    })

    newUser.createContact({
      phone: req.body.phone
    })

    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const [user] = await User.update(req.body, {
      where: {
        id: req.params.userId
      }
    })
    if (!user) {
      return res.status(404).send('User not found')
    }
    return res.status(200).json({ message: 'User updated' })
    
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.userId
      }
    }) 
    if (!user) {
      return res.status(404).send('User not found')
    }
    
    return res.status(200).json({ message: 'User deleted' })

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}