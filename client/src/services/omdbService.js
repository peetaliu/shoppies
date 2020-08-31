import axios from 'axios'
const baseURL = 'http://localhost:3001/api/movies'

const search = async sObj => {
  try {
    const req = await axios.post(`${baseURL}`, sObj)
    return req.data
  } catch (err) {}
}

export default { search }
