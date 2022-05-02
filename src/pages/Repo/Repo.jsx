import Content from "../../components/Content/Content"
import Navbar from "../../components/Navbar/Navbar"
import Profile from "../../components/Profile/Profile"
import React from "react"

const Repo = () => {
	return (
		<>
			<Navbar />
			<main className="w-[85vw] relative mx-auto flex flex-row items-start justify-between">
				<Profile />
				<Content />
			</main>
		</>
	)
}

export default Repo
