import type { Service } from "../types/service";

type Props = {
	service: Service;
};

export const ServiceCard = ({ service }: Props) => {
	return (
		<div className="rounded-xl overflow-hidden transition-all duration-300">
			<div className="flex flex-col h-full">
				<div className="p-4 flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center overflow-hidden">
							<img
								src={service.logo_url}
								alt={`${service.name} logo`}
								className="w-8 h-8 object-contain"
								loading="lazy"
							/>
						</div>
						<div className="ml-3">
							<h3 className="text-base font-medium">{service.name}</h3>
							<a
								href={service.website_url}
								className="text-xs text-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit homepage
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
