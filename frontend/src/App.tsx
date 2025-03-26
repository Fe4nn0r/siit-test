import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/home";

import "./global.css";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<HomePage />
		</QueryClientProvider>
	);
};
