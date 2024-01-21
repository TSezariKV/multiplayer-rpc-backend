require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { Server } = require('socket.io')
const http = require('http')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

let onlineUsers = 0

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

// middleware
app.use(cors())

// connect to database
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.dbURI)
    .then(() => {
        server.listen(PORT, () => console.log(`listening for requests on port ${PORT}`))
    })

// routes
app.get('/', (req, res) => {
    res.status(200).json({success: true})
})

// socket.io
io.on('connection', (socket) => {
    console.log('connected', socket.id)
    // onlineUsers++
    // io.emit('online_users', onlineUsers)

    // socket.on('disconnect', (socket) => {
    //     onlineUsers--
    //     io.emit('online_users', onlineUsers)
    // })
})