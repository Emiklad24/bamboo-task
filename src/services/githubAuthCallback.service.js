import { axiosToBackend } from "../utils/axiosInstance"

/**
 * @desc callback auth API call to get user setails from token
 * @returns {Object}
 */
export const githubAuthCallback = async ({ queryKey }) => {
	const token = queryKey[1]
	const res = await axiosToBackend.get(`/auth/github/callback${token}`)
	console.log(res.data)
	return res?.data
}

export default githubAuthCallback
