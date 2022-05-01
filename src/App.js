import "./App.css"
import Content from "./components/Content/Content"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import { queryClient } from "./utils/queryClient"
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<main className="w-[85vw] relative mx-auto flex flex-row items-center justify-between">
				<Profile />
				<Content />
			</main>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
