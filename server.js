require('dotenv').config()
const express = require('express')
const app = express()
const controller = require('./backend/connection')

const PORT = process.env.PORT || 8000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
