import type { Service } from "../types/service";

type Props = {
	service: Service;
	onServiceClick: (_service: Service) => void;
	isSelected: boolean;
};

export const ServiceCard = ({ service, onServiceClick, isSelected }: Props) => {
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
					<img
						src={service.logo_url}
						alt=""
						className="w-12 h-12 object-contain"
					/>
					<h3 className="text-lg font-semibold text-gray-800">
						{service.name}
					</h3>
				</div>
				<a
					href={service.website_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:text-blue-800 transition-colors"
					onClick={(event) => event.stopPropagation()}
				>
					Link
				</a>
			</div>
		</button>
	);
};
