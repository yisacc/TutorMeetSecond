import axios from "axios"
import { getToken } from "../common/Common"

const baseURL = "https://tutoret.herokuapp.com/"

const token = getToken()

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Credentials": true,
  },
})
axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response)
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
    if (error.response.status === 401) {
      // refreshToken();
      return new Promise((resolve, reject) => {
        reject(error)
      })
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
)

export default axiosInstance
