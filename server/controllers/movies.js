const omdbRouter = require('express').Router()
const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const axios = require('axios')
require('express-async-errors')
const baseURL = config.OMDB_URL

let cancelToken

omdbRouter.post('/', async (req, res) => {
  const body = req.body
  if (typeof cancelToken !== typeof undefined) {
    if (body.search.length === 0) {
      cancelToken.cancel()
      res.status(204)
    }
    cancelToken.cancel()
  }
  cancelToken = axios.CancelToken.source()
  const options = {
    method: 'POST',
    url: baseURL,
    params: { s: body.search, type: 'movie' },
    cancelToken: cancelToken.token,
  }
  try {
    const results = await axios(options)
    res.json(results.data)
  } catch (error) {
    res.send({ Cancel: true })
  }
})

module.exports = omdbRouter
