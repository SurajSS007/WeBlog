import axios from "axios";


    const auth = axios.create({
        baseURL:"http://localhost:5000",
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    });


export default auth
