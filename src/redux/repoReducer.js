import { createSlice } from "@reduxjs/toolkit"

export const repoSlice = createSlice({
	name: "repos",
	initialState: {
		repos: [],
		filterTerm: "",
	},
	reducers: {
		populateRepos: (state, action) => {
			state.repos = action.payload
		},
		updateFilterTerm: (state, action) => {
			state.filterTerm = action.payload.trim().toLowerCase()
		},
	},
})

export const { populateRepos, updateFilterTerm } = repoSlice.actions

export default repoSlice.reducer
