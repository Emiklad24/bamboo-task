import { backendURL } from "../config"

export const loginPopupHandler = (e) => {
	if (e) e.preventDefault()
	window.location.replace(`${backendURL}/connect/github`)
}
