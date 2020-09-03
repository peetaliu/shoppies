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
    method: 'GET',
    url: baseURL,
    params: { s: body.search, type: 'movie' },
    cancelToken: cancelToken.token,
  }
  try {
    const results = await axios(options)
    const data = results.data
    if (data.Error) {
      if (data.Error.includes('Too')) {
        res.json({ Error: `${data.Error} Please refine your search term.` })
      } else {
        res.json({ Error: `${data.Error} Try a different search term.` })
      }
    } else {
      res.json(data)
    }
  } catch (error) {
    res.send(error)
  }
})

omdbRouter.post('/populate', async (req, res) => {
  const ids = req.body.ids
  const resArr = await ids.map(async id => {
    const options = {
      method: 'GET',
      url: baseURL,
      params: { i: id },
    }
    const returnObj = await axios(options)
    return returnObj.data
  })
  res.json(await Promise.all(resArr))
})

module.exports = omdbRouter
