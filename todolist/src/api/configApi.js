import axios from "axios";

const configAPI = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "content-type": "application/json"
    }
});

configAPI.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

configAPI.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default configAPI;