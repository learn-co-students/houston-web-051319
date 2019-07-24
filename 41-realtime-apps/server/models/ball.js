const Sequelize = require('sequelize')
const sequelize = require('./database.js')

const Ball = sequelize.define('ball', {
    color: {
        type: Sequelize.STRING
    }
})

module.exports = Ball