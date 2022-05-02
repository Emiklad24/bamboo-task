import React from "react"
import FilterBar from "../FilterBar/FilterBar"
import useFetchGitHubRepos from "../../hooks/useFetchGithubPublicRepo.hook"
import RepoCard from "../../components/RepoCard/RepoCard"
import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"

const Content = () => {
	const { repos, filterTerm } = useSelector((state) => state.repos)
	const { isLoading } = useFetchGitHubRepos()
	const filteredRepo = repos.filter(
		(repo) => repo.name.toLowerCase().includes(filterTerm) || repo.name === filterTerm
	)

	return (
		<section className="basis-3/4 px-2">
			<section>
				{isLoading ? (
					<div className="duration-400 flex items-center justify-center h-32">
						Loading...
					</div>
				) : (
					<>
						<FilterBar />
						<AnimatePresence>
							{filteredRepo?.map((repo, i) => (
								<RepoCard repo={repo} key={repo.id} currentIndex={i} />
							))}
						</AnimatePresence>
					</>
				)}
			</section>
		</section>
	)
}

export default Content
