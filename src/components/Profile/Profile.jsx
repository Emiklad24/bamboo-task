import useFetchOtherUserDetail from "../../hooks/useFetchOtherUserDetail.hook"
import React from "react"
import { useSelector } from "react-redux"
import { FaRegEnvelope } from "react-icons/fa"
import { RiTwitterLine } from "react-icons/ri"
import { AiOutlineEnvironment } from "react-icons/ai"
import { BiLink } from "react-icons/bi"

const Profile = () => {
	useFetchOtherUserDetail()
	const { user } = useSelector((state) => state.auth)
	return (
		<aside className="basis-1/4 px-2 flex flex-col items-start and justify-start w-full">
			<div className="circle absolute -top-7 mb-8">
				<div className="w-64 h-64 bg-white rounded-full">
					<img
						src={user?.user?.avatar_url || ""}
						alt={user?.user?.username || ""}
						className="w-64 h-64 bg-white rounded-full"
					/>
				</div>
				<div className="absolute bottom-5 right-3 border-2 w-8 h-8 bg-gray-300 rounded-full "></div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			{/* details */}
			<div className="mt-20 flex flex-col items-start justify-center border-b py-4">
				<span className="text-xl font-semibold capitalize">{user?.user?.name || ""}</span>
				<span className="text-lg text-gray-600 lowercase">
					{user?.user?.username || user?.user?.login || ""}
				</span>
				<button className="my-4 w-full px-4 py-1 text-center text-gray-800 font-semibold text-sm bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded">
					follow
				</button>
				<p className="text-gray-800 font-semibold text-sm">{user?.user?.bio || ""}</p>
				<div className="flex flex-row items-center justify-start my-4 text-gray-700 text-sm">
					<span className="flex flex-row items-center justify-center hover:text-blue-500 cursor-pointer ">
						<svg
							text="muted"
							aria-hidden="true"
							height="16"
							viewBox="0 0 16 16"
							version="1.1"
							width="16"
							data-view-component="true"
							className="octicon octicon-people"
						>
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
							></path>
						</svg>
						<p className="ml-1 ">
							<strong>{user?.user?.followers || 0}</strong> followers .
						</p>
					</span>

					<span className="mx-2 flex flex-row items-center justify-center hover:text-blue-500 cursor-pointer">
						<p className="ml-1">
							<strong>{user?.user?.following || 0}</strong> following
						</p>
					</span>
				</div>
				<p className="flex flex-row items-start justify-center text-sm mb-2">
					<span className="mr-2 text-gray-700">
						<AiOutlineEnvironment size={20} />
					</span>
					{user?.user?.location || ""}
				</p>
				<p className="flex flex-row items-start justify-center text-sm mb-2">
					<span className="mr-2 text-gray-700">
						<FaRegEnvelope size={20} />
					</span>
					{user?.user?.email || ""}
				</p>
				<a
					href={`https://twitter.com/${user?.user?.twitter_username || ""}`}
					className="hover:text-blue-500 hover:underline"
					target="_blank"
				>
					<p className="flex flex-row items-start justify-center text-sm mb-2">
						<span className="mr-2 text-gray-700">
							<RiTwitterLine size={20} />
						</span>
						{user?.user?.twitter_username || ""}
					</p>
				</a>
				<p className="flex flex-row items-start justify-center text-sm">
					<span className="mr-2 text-gray-700">
						<BiLink size={20} />
					</span>
					<a
						href={user?.user?.blog || ""}
						className="hover:text-blue-500 hover:underline"
						target="_blank"
					>
						{user?.user?.blog || ""}
					</a>
				</p>
			</div>
		</aside>
	)
}

export default Profile
