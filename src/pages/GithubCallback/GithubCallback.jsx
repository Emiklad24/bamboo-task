import React from "react"
import { Redirect } from "react-router-dom"
import useFetchGithubAuthCallback from "../../hooks/useFetchGithubAuthCallback.hook"
import { useSelector } from "react-redux"

export default function GithubAuthCallback() {
	const { isAuthenticated } = useSelector((state) => state.auth)
	const { isLoading, token } = useFetchGithubAuthCallback()

	if (isAuthenticated || !token) {
		return <Redirect to="/" />
	}

	return (
		<>
			{isLoading && (
				<div className="flex items-center justify-center h-screen">
					<p className="text-bold text-md">Please wait ...</p>
				</div>
			)}
		</>
	)
}
