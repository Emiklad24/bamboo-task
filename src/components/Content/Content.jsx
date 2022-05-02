import React from "react"
import FilterBar from "../FilterBar/FilterBar"
import useFetchGitHubRepos from "../../hooks/useFetchGithubPublicRepo.hook"
import RepoCard from "../../components/RepoCard/RepoCard"

const Content = () => {
	const { repos } = useFetchGitHubRepos()

	return (
		<section className="basis-3/4 px-2">
			<section>
				<FilterBar />
				{repos?.map((repo) => (
					<RepoCard repo={repo} key={repo.id} />
				))}
			</section>
		</section>
	)
}

export default Content
