import { ErrorMessage } from "../../../components/ErrorMessage";
import { NoResults } from "../../../components/NoResults";
import { useUsers } from "../../users/hooks/useUsers";
import type { User } from "../../users/types/user";
import type { Service } from "../types/service";
import { ServiceCard } from "./ServiceCard";

type Props = {
	isError: boolean;
	isLoading: boolean;
	services?: Service[];
	onServiceClick: (_service: Service) => void;
	selectedService?: Service;
};

export const ServiceList = ({
	services,
	isLoading,
	isError,
	onServiceClick,
	selectedService,
}: Props) => {
	const { data: unfilteredUsers } = useUsers({ filterText: "" });

	if (isError) {
		return <ErrorMessage>Failed to load services</ErrorMessage>;
	}

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{[...Array(6)].map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: not needed for a static list
						key={i}
						className="h-20 rounded-xl bg-gray-200 animate-pulse"
					/>
				))}
			</div>
		);
	}

	if (services?.length === 0) {
		return <NoResults>No services found</NoResults>;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{isError && <ErrorMessage>Failed to load services</ErrorMessage>}
			{services?.map((service) => (
				<ServiceCard
					key={service.id}
					service={service}
					onServiceClick={onServiceClick}
					isSelected={selectedService === service}
					users={unfilteredUsers}
				/>
			))}
		</div>
	);
};
