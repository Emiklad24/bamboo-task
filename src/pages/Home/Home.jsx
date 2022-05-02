import React from "react"
import { IoLogoGithub } from "react-icons/io5"
import { loginPopupHandler } from "../../utils/loginHelper"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const Home = () => {
	const { isAuthenticated } = useSelector((state) => state.auth)

	if (isAuthenticated) {
		return <Redirect to="/repos" />
	}
	return (
		<div className="flex items-center justify-center h-screen">
			<motion.button
				className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
				onClick={loginPopupHandler}
				whileHover={{ scale: 1.03, position: "relative", zIndex: 2 }}
				whileTap={{ scale: 0.95 }}
			>
				<IoLogoGithub size={30} className="mr-2" />
				<span>Login with Github</span>
			</motion.button>
		</div>
	)
}

export default Home
