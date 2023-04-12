import axios from "axios";

const baseUrl= 'http://localhost:5173/api/login'

const login = async credentials => {
    console.log(data)
    const {data} = await axios.post(baseUrl, credentials)
    return data
}


export default {login}