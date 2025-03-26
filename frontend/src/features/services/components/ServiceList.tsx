import { ErrorMessage } from "../../../components/ErrorMessage";
import type { Service } from "../types/service";
import { ServiceCard } from "./ServiceCard";

type Props = {
	isError: boolean;
	isLoading: boolean;
	services?: Service[];
};

export const ServiceList = ({ services, isLoading, isError }: Props) => {
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

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{isError && <ErrorMessage>Failed to load services</ErrorMessage>}
			{services?.map((service) => (
				<ServiceCard key={service.id} service={service} />
			))}
		</div>
	);
};
