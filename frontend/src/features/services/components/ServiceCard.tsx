import { ExternalLinkIcon } from "../../../icons/ExternalLinkIcon";
import { formatPrice } from "../../../utils/price";
import type { User } from "../../users/types/user";
import { useServiceCost } from "../hooks/useServiceCost";
import type { Service } from "../types/service";
import { ServiceLogo } from "./ServiceLogo";

type Props = {
	service: Service;
	onServiceClick: (_service: Service) => void;
	isSelected: boolean;
	users?: User[];
};

export const ServiceCard = ({
	service,
	onServiceClick,
	isSelected,
	users,
}: Props) => {
	const { monthlyCost, usersCount } = useServiceCost(service, users);

	return (
		<button
			className={`bg-white rounded-lg shadow-md p-4 flex flex-col cursor-pointer transition-all hover:shadow-lg ${
				isSelected && "ring-2 ring-blue-500 shadow-lg"
			}`}
			type="button"
			onClick={() => onServiceClick(service)}
			tabIndex={0}
		>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-4">
					<ServiceLogo sourceUri={service.logo_url} />
					<h3 className="text-lg font-semibold text-gray-800">
						{service.name}
					</h3>
				</div>
				<a
					href={service.website_url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-blue-600 transition-colors hover:text-blue-800 hover:underline"
					onClick={(event) => event.stopPropagation()}
				>
					<ExternalLinkIcon width={16} height={16} />
					Go to
				</a>
			</div>
			<div className="mt-auto space-y-2 pt-4 border-t border-gray-100">
				<div className="flex items-center justify-between text-sm text-gray-600">
					<span>Users:</span>

					{service.price.nb_users_included > 0 ? (
						<span className="font-medium">
							{usersCount} / {service.price.nb_users_included} included
						</span>
					) : (
						<span className="font-medium">{usersCount}</span>
					)}
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1 text-sm text-gray-600">
						<span>Monthly Cost:</span>
					</div>
					<span className="font-semibold text-green-700">
						{formatPrice(monthlyCost)}
					</span>
				</div>
				<div className="text-left text-xs text-gray-500 italic">
					{formatPrice(service.price.cost_per_user)}/ additional user
				</div>
			</div>
		</button>
	);
};
