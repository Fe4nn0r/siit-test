import type { Service } from "../types/service";

export const calculateServiceMonthlyCost = (
	service: Service,
	usersCount: number,
) => {
	const extraUsers = Math.max(0, usersCount - service.price.nb_users_included);
	return service.price.flat_cost + service.price.cost_per_user * extraUsers;
};
