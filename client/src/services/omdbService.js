import axios from 'axios'
const baseURL = 'http://localhost:3001/api/movies'

const search = async sObj => {
  console.log('sObj: ', sObj)
  const req = await axios.post(`${baseURL}`, sObj)
  return req.data
}

export default { search }
