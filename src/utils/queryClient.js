import { QueryClient } from "react-query"

const queryClientSettings = {
	defaultOptions: {
		queries: {
			retry: 2,
			refetchOnMount: true,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			cacheTime: 7.776e9 /* @HINT: 90 days */,
			refetchInterval: 100000,
			refetchIntervalInBackground: true,
			suspense: false,
			staleTime: 3600 * 1000 /* @HINT: 3600 seconds */,
		},
		mutations: {
			retry: 2,
		},
	},
}

export const queryClient = new QueryClient(queryClientSettings)
