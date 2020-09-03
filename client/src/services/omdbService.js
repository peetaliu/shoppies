import axios from 'axios'
const baseURL = 'http://localhost:3001/api/movies'

const search = async sObj => {
  try {
    const req = await axios.post(`${baseURL}`, sObj)
    return req.data
  } catch (err) {
    console.log('Search error: ', err)
  }
}

const populate = async idsObj => {
  try {
    const req = await axios.post(`${baseURL}/populate`, idsObj)
    return req.data
  } catch (err) {
    console.log('Populate Error: ', err)
  }
}

export default { search, populate }
