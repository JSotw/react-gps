import axios from "axios";


const url = "http://localhost:3000"
console.log(url);

const instance = axios.create({
  baseURL: url,
  withCredentials: true
})

export default instance;