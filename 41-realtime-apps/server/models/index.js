const Sequelize = require('sequelize')
const sequelize = require('./database.js')
const Ball = require('./ball.js')
const User = require('./user.js')
const pry = require('pryjs')

sequelize.drop()
    .then( () => {
        sequelize.sync()
            .then( async () => {
                let user = await User.create({ username: 'josh', password: '1234' })
                console.log(user.auth_token)
                Ball.create({ color: 'Red' })
            })
    })

// eval(pry.it)

module.exports = {
    Ball, User
}
