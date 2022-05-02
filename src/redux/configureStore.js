import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import authReducer from "./authReducer"
import reposReducer from "../redux/repoReducer"
import hardSet from "redux-persist/lib/stateReconciler/hardSet"

const reducers = combineReducers({
	auth: authReducer,
	repos: reposReducer,
})

const persistConfig = {
	key: "bamboo-task-persist-store",
	storage,
	version: 2.5,
	stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
})

export default store
