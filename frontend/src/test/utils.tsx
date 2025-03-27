import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";

export const renderWithClient = (ui: ReactNode) => {
	return render(
		<QueryClientProvider client={new QueryClient()}>{ui}</QueryClientProvider>,
	);
};
