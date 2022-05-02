import { useTransition } from "react"
import { MdOutlineArrowDropDown } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { IoCheckmarkOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import { updateFilterTerm } from "../../redux/repoReducer"

const FilterBar = () => {
	const [_, startTransition] = useTransition()
	const dispatch = useDispatch()

	function updateFilterHandler(event) {
		startTransition(() => {
			dispatch(updateFilterTerm(event.target.value))
		})
	}

	return (
		<div className="relative w-full flex flex-row items-center justify-between">
			<input
				type="search"
				className="
        form-control block w-full px-2 py-1 text-sm font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out my-4 focus:text-gray-500 focus:bg-white focus:border-2 focus:border-blue-600 focus:outline-none duration-400"
				placeholder="Find a repository..."
				onChange={updateFilterHandler}
			/>

			{/* filter buttons */}
			<div className=" ml-4 flex flex-row">
				{/* button TYPE */}
				<div className="flex flex-col items-center justify-start">
					<button className="px-2 py-1 flex flex-row items-center text-sm font-semibold text-gray-800 justify-between border bg-gray-100 rounded focus:bg-gray-200 focus:outline-none">
						Type
						<MdOutlineArrowDropDown className="text-lg ml-1 text-gray-600" />
					</button>
					{/* dropdown items */}
					<div className="relative hidden">
						<div className="absolute w-[20rem] bg-white -left-[18rem]  font-semibold z-50 list-none divide-y divide-gray-100 rounded shadow-lg border my-2">
							<div className="flex flex-row items-center justify-between text-gray-700 px-4 py-1">
								<span className=" text-xs">Select Type</span>
								<AiOutlineClose className="text-md" />
							</div>
							<ul className="" aria-labelledby="dropdown">
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									All
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Public
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Private
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Forked
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* button LANGUAGE */}
				<div className="flex flex-col items-center justify-start mx-2">
					<button className="px-2 py-1 flex flex-row items-center text-sm font-semibold text-gray-800 justify-between border bg-gray-100 rounded focus:bg-gray-200 focus:outline-none">
						Language
						<MdOutlineArrowDropDown className="text-lg ml-1 text-gray-600" />
					</button>
					{/* dropdown items */}
					<div className="relative hidden">
						<div className="absolute w-[20rem] bg-white -left-[17rem]  font-semibold z-50 list-none divide-y divide-gray-100 rounded shadow-lg border my-2">
							<div className="flex flex-row items-center justify-between text-gray-700 px-4 py-1">
								<span className=" text-xs">Select Type</span>
								<AiOutlineClose className="text-md" />
							</div>
							<ul className="" aria-labelledby="dropdown">
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									All
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Public
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Private
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Forked
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* button SORT */}
				<div className="flex flex-col items-center justify-start mx-2">
					<button className="px-2 py-1 flex flex-row items-center text-sm font-semibold text-gray-800 justify-between border bg-gray-100 rounded focus:bg-gray-200 focus:outline-none">
						Sort
						<MdOutlineArrowDropDown className="text-lg ml-1 text-gray-600" />
					</button>
					{/* dropdown items */}
					<div className="relative hidden">
						<div className="absolute w-[20rem] bg-white -left-[18rem]  font-semibold z-50 list-none divide-y divide-gray-100 rounded shadow-lg border my-2">
							<div className="flex flex-row items-center justify-between text-gray-700 px-4 py-1">
								<span className=" text-xs">Select Type</span>
								<AiOutlineClose className="text-md" />
							</div>
							<ul className="" aria-labelledby="dropdown">
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									All
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Public
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Private
								</li>
								<li className="flex flex-row items-center justify-start text-xs hover:bg-gray-100 border-b text-gray-700  px-2 py-1.5">
									<IoCheckmarkOutline className="text-md mx-2" />
									Forked
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FilterBar
