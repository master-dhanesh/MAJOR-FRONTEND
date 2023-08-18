import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend-d9c4.onrender.com" || "http://localhost:8080/",
    withCredentials: true,
});

export default instance;
