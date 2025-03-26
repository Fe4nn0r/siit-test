import type { Service } from "../../types/service";
import { calculateServiceMonthlyCost } from "../serviceCost";

describe("calculateServiceMonthlyCost", () => {
	const mockService: Service = {
		id: 1,
		name: "Service",
		logo_url: "https://example.com/logo.png",
		website_url: "https://example.com",
		price: {
			flat_cost: 100,
			nb_users_included: 5,
			cost_per_user: 20,
		},
	};

	it("should return flat cost when users count equals included users", () => {
		const cost = calculateServiceMonthlyCost(mockService, 5);
		expect(cost).toBe(100);
	});

	it("should add per-user cost for additional users", () => {
		const cost = calculateServiceMonthlyCost(mockService, 6);
		expect(cost).toBe(120);
	});
});
