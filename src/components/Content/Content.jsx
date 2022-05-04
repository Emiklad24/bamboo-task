import React from "react"
import FilterBar from "../FilterBar/FilterBar"
import useFetchGitHubRepos from "../../hooks/useFetchGithubPublicRepo.hook"
import RepoCard from "../../components/RepoCard/RepoCard"
import { AnimatePresence } from "framer-motion"
import { useSelector } from "react-redux"
import { BiError, BiSad } from "react-icons/bi"
// import Fuse from "fuse.js"

const Content = () => {
	const options = {
		keys: ["name", "full_name", "language"],
	}
	const { repos, filterTerm } = useSelector((state) => state.repos)
	const { isLoading, isError } = useFetchGitHubRepos()
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
				) : isError ? (
					<div className="duration-400 flex items-center justify-center h-48 text-red-700 border-t py-4 w-full border-b mt-2">
						Error fetching repos
						<BiError className="ml-4" size={30} />
					</div>
				) : (
					<>
						<FilterBar />
						<AnimatePresence>
							{filteredRepo?.length === 0 ? (
								<div className="duration-400 flex items-center justify-center h-48 text-red-700 border-t py-4 w-full border-b">
									Result empty
									<BiSad className="ml-4" size={30} />
								</div>
							) : (
								repos?.map?.((repo, i) => (
									<RepoCard repo={repo} key={repo?.id} currentIndex={i} />
								))
							)}
						</AnimatePresence>
					</>
				)}
			</section>
		</section>
	)
}

export default Content
