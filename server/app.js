const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const movieRouter = require('./controllers/movies')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/movies', movieRouter)

module.exports = app
