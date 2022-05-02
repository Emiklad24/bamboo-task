import axios from "axios"
import { backendURL } from "../config"

const instanceSettings = {
	baseURL: backendURL,
	timeout: 300000,
}

function formatResponseError({ response, ...rest }) {
	let formatedError = {
		message:
			response?.data?.message === "An internal server error occurred"
				? "Something went wrong, try again"
				: response?.data?.message?.[0]?.messages?.[0]?.message ===
				  "An internal server error occurred"
				? "Something went wrong, try again"
				: response?.data?.message?.[0]?.messages?.[0]?.message ||
				  response?.data?.message ||
				  "Something went wrong, try again",
		...rest,
	}
	return Promise.reject(formatedError)
}

let axiosToBackend = axios.create(instanceSettings)

axiosToBackend.interceptors.response.use(null, formatResponseError)

export { axiosToBackend }
