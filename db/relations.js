const User = require('../api/models/user.model')
const Contact = require('../api/models/contact.model')
const Tweet = require('../api/models/tweet.model')

function addRelations() {
  try {
    
    //ONE TO ONE - Users & Contact
    User.hasOne(Contact, {
      onDelete: 'CASCADE'
    })
    Contact.belongsTo(User, {
      onDelete: 'CASCADE'
    })

    //ONE TO MANY - User & Tweet
    User.hasMany(Tweet, {
      onDelete: 'SET NULL'
    })
    Tweet.belongsTo(User, {
      onDelete: 'SET NULL'
    })

    //MANY TO MANY
    User.belongsToMany(Tweet, {through: 'like', as: 'likes', onDelete: 'SET NULL'})
    Tweet.belongsToMany(User, {through: 'like', as: 'likes', onDelete: 'SET NULL'})

    //MANY TO MANY
    User.belongsToMany(User, {through: 'follower', as: 'follow'})

  } catch (error) {
    console.log(error)
  }
}

module.exports = addRelations