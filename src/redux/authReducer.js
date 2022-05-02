import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		isAuthenticated: false,
	},
	reducers: {
		populateUserInfo: (state, action) => {
			state.user = action.payload
			state.isAuthenticated = true
		},
	},
})

export const { populateUserInfo } = authSlice.actions

export default authSlice.reducer
