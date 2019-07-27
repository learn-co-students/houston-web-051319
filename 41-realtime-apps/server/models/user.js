const Sequelize = require('sequelize')
const sequelize = require('./database.js')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password_digest: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.VIRTUAL,
        set: function(value){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password_digest', hash)
        }
    },
    auth_token: {
        type: Sequelize.VIRTUAL,
        get: function(){
            return jwt.encode({ id: this.id }, 'laksdjfo0232380')
        }
    }
})

module.exports = User