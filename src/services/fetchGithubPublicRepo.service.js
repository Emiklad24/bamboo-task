import axios from "axios"

/**
 * @desc fetches first 20 public repo of a user
 * @returns {Array}
 */
const fetchGitHubRepos = async ({ queryKey }) => {
	const username = queryKey[1]
	const res = await axios?.get(
		`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-desc&per_page=20`
	)
	let repos = res?.data?.items
	return repos
}

export default fetchGitHubRepos
