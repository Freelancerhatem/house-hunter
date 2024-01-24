import axios from "axios";

const axiosLoader = axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxiosLoader = () => {
    return axiosLoader
};

export default UseAxiosLoader;