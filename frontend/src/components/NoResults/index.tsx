import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const NoResults = ({ children }: Props) => {
	return (
		<div className="text-center py-10">
			<p className="text-gray-500">{children}</p>
		</div>
	);
};
