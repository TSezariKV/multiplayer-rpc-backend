require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

// connect to database
mongoose.connect(process.env.dbURI)
    .then(() => {
        app.listen(PORT, () => console.log(`listening for requests on port ${PORT}`))
    })

// routes
app.get('/', (req, res) => {
    res.status(200).json({success: true})
})