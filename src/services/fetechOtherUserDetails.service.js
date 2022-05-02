import axios from "axios"

/**
 * @desc fetch other user details not contained in the Oauth login
 * @returns {Object}
 */
const fetchOtherUserDetails = async ({ queryKey }) => {
	const username = queryKey[1]
	const res = await axios?.get(`https://api.github.com/users/${username}`)
	let userDetails = res.data
	return userDetails
}

export default fetchOtherUserDetails
