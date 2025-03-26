import { useQuery } from "@tanstack/react-query";
import type { Service } from "../types/service";

const fetchServices = async (): Promise<Service[]> => {
	const response = await fetch("/services.json");
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};

export const useServices = () => {
	return useQuery<Service[], Error>({
		queryKey: ["services"],
		queryFn: fetchServices,
	});
};
