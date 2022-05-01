import axios from "axios"

const fetchGitHubRepos = async () => {
	const username = "Emiklad24"
	const res = await axios?.get(
		`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
	)
	let repos = res?.data?.items
	return repos
}

export default fetchGitHubRepos
