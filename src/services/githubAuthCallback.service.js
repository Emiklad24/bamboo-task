import { axiosToBackend } from "../utils/axiosInstance"

export const githubAuthCallback = async ({ queryKey }) => {
	const token = queryKey[1]
	const res = await axiosToBackend.get(`/auth/github/callback${token}`)
	return res?.data
}

export default githubAuthCallback
