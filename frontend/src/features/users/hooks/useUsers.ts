import { useQuery } from "@tanstack/react-query";
import type { Service } from "../../services/types/service";
import type { User } from "../types/user";

const fetchUsers = async (serviceId?: number): Promise<User[]> => {
	const url = serviceId
		? `/users.json?service_id=${serviceId.toString()}`
		: "/users.json";

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};

export const useUsers = ({
	service,
	filterText,
}: {
	service?: Service;
	filterText: string;
}) => {
	const serviceId = service?.id;
	return useQuery<User[], Error>({
		queryKey: ["users", serviceId],
		queryFn: () => fetchUsers(serviceId),
		select: (users) => {
			if (!filterText) {
				return users;
			}

			const lowercaseFilter = filterText.toLowerCase();
			return users.filter(
				(user) =>
					user.name.toLowerCase().includes(lowercaseFilter) ||
					user.position.toLowerCase().includes(lowercaseFilter),
			);
		},
	});
};
