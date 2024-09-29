import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
console.log("baseurl=> ",baseUrl); // Outputs: http://localhost:8000/

export default axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type":"application/json",

    }
})