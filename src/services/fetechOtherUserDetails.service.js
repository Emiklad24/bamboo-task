import axios from "axios"

const fetchOtherUserDetails = async ({ queryKey }) => {
	const username = queryKey[1]
	const res = await axios?.get(`https://api.github.com/users/${username}`)
	let repos = res.data
	return repos
}

export default fetchOtherUserDetails
