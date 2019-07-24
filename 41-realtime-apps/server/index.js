const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { Ball } = require('./models/index.js')


app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3001', credentials: true}))

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

http.listen(8080)