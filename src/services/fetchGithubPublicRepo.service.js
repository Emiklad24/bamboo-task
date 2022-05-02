import axios from "axios"

const fetchGitHubRepos = async ({ queryKey }) => {
	const username = queryKey[1]
	const res = await axios?.get(
		`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-desc&per_page=20`
	)
	let repos = res?.data?.items
	return repos
}

export default fetchGitHubRepos
