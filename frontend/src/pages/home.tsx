import { useState } from "react";
import { ServiceList } from "../features/services/components/ServiceList";
import { useServices } from "../features/services/hooks/useServices";
import type { Service } from "../features/services/types/service";
import { UserList } from "../features/users/components/UserList";
import { useUsers } from "../features/users/hooks/useUsers";

export const HomePage = () => {
	const [selectedService, setSelectedService] = useState<Service>();

	const {
		data: users,
		isLoading: isLoadingUsers,
		isError: hasErroredLoadingUsers,
	} = useUsers({ service: selectedService });
	const {
		data: services,
		isLoading: isLoadingServices,
		isError: hasErroredLoadingServices,
	} = useServices();

	const handleServiceClick = (service: Service) => {
		if (selectedService === service) {
			setSelectedService(undefined);
		} else {
			setSelectedService(service);
		}
	};

	return (
		<main className="flex-1 container py-8 px-4 md:px-8 max-w-7xl mx-auto">
			<section className="mb-12" aria-labelledby="users-heading">
				<h3 id="users-heading" className="text-lg font-medium mb-4">
					Users
					{users && (
						<span className="ml-2 text-sm font-normal">({users.length})</span>
					)}
				</h3>
				<UserList
					isLoading={isLoadingUsers}
					users={users}
					isError={hasErroredLoadingUsers}
				/>
			</section>
			<section aria-labelledby="services-heading">
				<h3 id="services-heading" className="text-lg font-medium mb-4">
					Services
					{services && (
						<span className="ml-2 text-sm font-normal">
							({services.length})
						</span>
					)}
				</h3>
				<ServiceList
					services={services}
					isLoading={isLoadingServices}
					isError={hasErroredLoadingServices}
					onServiceClick={handleServiceClick}
					selectedService={selectedService}
					users={users}
				/>
			</section>
		</main>
	);
};
