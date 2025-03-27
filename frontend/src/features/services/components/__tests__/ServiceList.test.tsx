import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithClient } from "../../../../test/utils";
import type { Service } from "../../types/service";
import { ServiceList } from "../ServiceList";

const mockServices: Service[] = [
	{
		id: 1,
		name: "Service 1",
		website_url: "https://example.com",
		logo_url: "https://example.com/logo.png",
		price: {
			cost_per_user: 10,
			flat_cost: 0,
			nb_users_included: 0,
		},
	},
];

describe("ServiceList", () => {
	it("renders each service", () => {
		renderWithClient(
			<ServiceList
				services={mockServices}
				isLoading={false}
				isError={false}
				onServiceClick={() => {}}
			/>,
		);

		for (const service of mockServices) {
			expect(screen.getByText(service.name)).toBeInTheDocument();
		}
	});
});
