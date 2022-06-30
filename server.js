require('dotenv').config()
const express = require('express')
const app = express()
const controller = require('./backend/controller')
const cors = require('cors')

const PORT = process.env.PORT || 4003;

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/api/itemdetails', controller.getAllItemData)


app.use((_, res) => {
    res.status(404);
    res.setHeader('Content-type', 'text/plain')
    res.send('Not Found')
})