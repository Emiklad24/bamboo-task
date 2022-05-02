import "./App.css"
import { queryClient } from "./utils/queryClient"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home/Home"
import Repo from "./pages/Repo/Repo"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import GithubAuthCallback from "./pages/GithubCallback/GithubCallback"
import { AnimatePresence, motion } from "framer-motion"

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AnimatePresence exitBeforeEnter>
				<motion.div
					initial="pageInitial"
					animate="pageAnimate"
					variants={{
						pageInitial: {
							opacity: 0,
						},
						pageAnimate: {
							opacity: 1,
							transition: {
								duration: 0.5,
							},
						},
						pageExit: {
							opacity: 0,
						},
					}}
					exit="pageExit"
				>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/auth/github/callback" component={GithubAuthCallback} />
						<PrivateRoute exact path="/repos" component={Repo} />
					</Switch>
				</motion.div>
			</AnimatePresence>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
