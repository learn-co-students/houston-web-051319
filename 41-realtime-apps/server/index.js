const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const { Ball, User } = require('./models/index.js')


app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3002', credentials: true}))



app.post('/login', async (req, res) => {
    const { username, password } = req.body
    let user = await User.findOne({ where: { username: username } })
    if(user && bcrypt.compareSync(password, user.password_digest)){
        res.send(user)
    } else {
        res.send("Nope!")
    }
})

app.get('/balls', (req, res) => {
    Ball.findAll({})
        .then( result => {
            res.send(result)
        })
})

app.post('/balls', ( req, res ) => {
    Ball.create(req.body)
    res.send(req.body)
    io.emit('newBall', req.body)
})

io.on('connection', async socket => {
    let user
    let token = socket.handshake.query.token    
    if(token){
        let { id } = jwt.decode(token, 'laksdjfo0232380')
        user = await User.findByPk(id)
    }

    if(!user) socket.disconnect()

    if(user){
        // authenticated listeners
    } else {
        // unauthenticated listener
    }
})
http.listen(8080)