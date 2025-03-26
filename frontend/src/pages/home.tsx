import { ServiceList } from "../features/services/components/ServiceList";
import { useServices } from "../features/services/hooks/useServices";
import { UserList } from "../features/users/components/UserList";
import { useUsers } from "../features/users/hooks/useUsers";

export const HomePage = () => {
	const {
		data: users,
		isLoading: isLoadingUsers,
		isError: hasErroredLoadingUsers,
	} = useUsers();
	const {
		data: services,
		isLoading: isLoadingServices,
		isError: hasErroredLoadingServices,
	} = useServices();

	return (
		<main className="flex-1 container py-8 px-4 md:px-8 max-w-7xl mx-auto">
			<section className="mb-12" aria-labelledby="users-heading">
				<h3 id="users-heading" className="text-lg font-medium mb-4">
					Users
					{users && (
						<span className="ml-2 text-sm font-normal">
							({users.length} user{users.length !== 1 ? "s" : ""})
						</span>
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
							({services.length} service{services.length !== 1 ? "s" : ""})
						</span>
					)}
				</h3>
				<ServiceList
					services={services}
					isLoading={isLoadingServices}
					isError={hasErroredLoadingServices}
				/>
			</section>
		</main>
	);
};
