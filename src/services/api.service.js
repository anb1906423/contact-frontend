// File api.service.js láy dữ liệu từ server

import axios from "axios"

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
}

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    })
}