const sequelize = require('./database.js')
const Ball = require('./ball.js')


sequelize.drop()
    .then( () => {
        sequelize.sync()
            .then( () => {
                Ball.create({ color: 'Red' })
            })
    })

module.exports = {
    Ball
}
