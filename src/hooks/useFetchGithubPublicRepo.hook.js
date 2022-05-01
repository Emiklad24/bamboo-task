import { FECTH_GITHUB_PUBLIC_REPO } from "../utils/queryKeys"
import { useQuery } from "react-query"
import fetchGitHubRepos from "../services/fetchGithubPublicRepo.service"

const useFetchGitHubRepos = (initialData) => {
	const { data, isLoading, isError } = useQuery({
		queryFn: fetchGitHubRepos,
		queryKey: [FECTH_GITHUB_PUBLIC_REPO],
		initialData: initialData,
	})

	return {
		data,
		isLoading,
		isError,
	}
}

export default useFetchGitHubRepos
