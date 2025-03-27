import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Layout/Header";
import { HomePage } from "./pages/Homepage";

import "./global.css";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="min-h-screen bg-gray-50">
				<Header />
				<HomePage />
			</div>
		</QueryClientProvider>
	);
};
