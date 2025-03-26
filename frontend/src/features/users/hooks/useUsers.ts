import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/user";

const fetchUsers = async (): Promise<User[]> => {
	const response = await fetch("/users.json");
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};

export const useUsers = () => {
	return useQuery<User[], Error>({
		queryKey: ["users"],
		queryFn: fetchUsers,
	});
};
