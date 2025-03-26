import { useMemo } from "react";
import type { User } from "../../users/types/user";
import type { Service } from "../types/service";
import { calculateServiceMonthlyCost } from "../utils/serviceCost";

const getUsersCountForService = (users: User[], serviceId: number) => {
	return users.filter((user) => user.service_ids.includes(serviceId)).length;
};

export const useServiceCost = (service: Service, users?: User[]) => {
	const usersCount = useMemo(() => {
		if (!users) return 0;
		return getUsersCountForService(users, service.id);
	}, [users, service.id]);

	const monthlyCost = useMemo(() => {
		return calculateServiceMonthlyCost(service, usersCount);
	}, [service, usersCount]);

	return {
		usersCount,
		monthlyCost,
	};
};
