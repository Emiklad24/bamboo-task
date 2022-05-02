import githubAuthCallback from "../services/githubAuthCallback.service"
import { FETCH_GITHUB_AUTH_CALLBACK } from "../utils/queryKeys"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"
import { populateUserInfo } from "../redux/authReducer"
import { useLocation } from "react-router-dom"

const useFetchGithubAuthCallback = () => {
	const { search: token } = useLocation()
	const dispatch = useDispatch()
	const { data, isLoading, isError } = useQuery({
		queryFn: githubAuthCallback,
		queryKey: [FETCH_GITHUB_AUTH_CALLBACK, token],
		onSuccess: (returnedData) => {
			dispatch(populateUserInfo(returnedData))
		},
	})

	return {
		data,
		isLoading,
		isError,
		token,
	}
}

export default useFetchGithubAuthCallback
