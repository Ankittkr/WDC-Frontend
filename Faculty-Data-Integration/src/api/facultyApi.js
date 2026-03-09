import axios from "axios";

const api = axios.create({
    baseURL:"https://admin.nitp.ac.in/api"
})

export const getFaculty = async (email)=>{
    const {data} = await api.get(`/faculty?type=${email}`)
    return data
}