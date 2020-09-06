require('dotenv').config()

let PORT = process.env.PORT || 3001
let OMDB_URL = process.env.OMDB_URL

module.exports = {
  OMDB_URL,
  PORT,
}
