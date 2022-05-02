import { FECTH_GITHUB_PUBLIC_REPO } from "../utils/queryKeys"
import { useQuery } from "react-query"
import fetchGitHubRepos from "../services/fetchGithubPublicRepo.service"
import { useDispatch, useSelector } from "react-redux"
import { populateRepos } from "../redux/repoReducer"

const useFetchGitHubRepos = () => {
	const { repos } = useSelector((state) => state.repos)
	const { user } = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const { data, isLoading, isError } = useQuery({
		queryFn: fetchGitHubRepos,
		queryKey: [FECTH_GITHUB_PUBLIC_REPO, user.user.username],
		onSuccess: (returnedData) => {
			dispatch(populateRepos(returnedData))
		},
	})

	return {
		data,
		isLoading,
		isError,
		repos,
	}
}

export default useFetchGitHubRepos
