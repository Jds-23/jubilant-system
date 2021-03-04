import axios from 'axios'

const instance = axios.create({
    baseURL:'https://jk4c7aeyf6.execute-api.us-east-2.amazonaws.com/'
})

export default instance