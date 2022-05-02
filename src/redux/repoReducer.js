import { createSlice } from "@reduxjs/toolkit"

export const repoSlice = createSlice({
	name: "repos",
	initialState: {
		repos: [],
	},
	reducers: {
		populateRepos: (state, action) => {
			state.repos = action.payload
		},
	},
})

export const { populateRepos } = repoSlice.actions

export default repoSlice.reducer
