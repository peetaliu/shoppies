import axios from 'axios'
const baseURL = '/api/movies'

const search = async sObj => {
  try {
    const req = await axios.post(`${baseURL}`, sObj)
    return req.data
  } catch (err) {
    console.log('Search error: ', err)
  }
}

const populate = async id => {
  try {
    const req = await axios.post(`${baseURL}/populate`, { id: id })
    return req.data
  } catch (err) {
    console.log('Populate Error: ', err)
  }
}

export default { search, populate }
