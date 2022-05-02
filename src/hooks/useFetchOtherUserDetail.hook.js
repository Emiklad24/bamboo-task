import { FETCH_OTHER_USER_DETAILS } from "../utils/queryKeys"
import { useQuery } from "react-query"
import fetchOtherUserDetails from "../services/fetechOtherUserDetails.service"
import { useDispatch, useSelector } from "react-redux"
import { populateUserInfo } from "../redux/authReducer"

const useFetchOtherUserDetail = () => {
	const { user } = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const { data, isLoading, isError } = useQuery({
		queryFn: fetchOtherUserDetails,
		queryKey: [FETCH_OTHER_USER_DETAILS, user.user.username],
		onSuccess: (returnedData) => {
			dispatch(populateUserInfo({ ...user, user: { ...returnedData, ...user.user } }))
		},
	})

	return {
		data,
		isLoading,
		isError,
	}
}

export default useFetchOtherUserDetail
