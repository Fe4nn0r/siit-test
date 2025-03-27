import { useQuery } from "@tanstack/react-query";
import type { Service } from "../types/service";

const fetchServices = async (): Promise<Service[]> => {
	const response = await fetch("/services.json");
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};

export const useServices = ({ filterText }: { filterText: string }) => {
	return useQuery<Service[], Error>({
		queryKey: ["services"],
		queryFn: fetchServices,
		select: (services) => {
			if (!filterText) {
				return services;
			}

			const lowercaseFilter = filterText.toLowerCase();
			return services.filter(
				(service) =>
					service.name.toLowerCase().includes(lowercaseFilter) ||
					service.website_url.toLowerCase().includes(lowercaseFilter),
			);
		},
	});
};
