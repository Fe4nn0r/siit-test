import { useState } from "react";

type Props = {
	sourceUri: string;
};

export const ServiceLogo = ({ sourceUri }: Props) => {
	const [hasError, setHasError] = useState(false);

	if (hasError) {
		return <div className="w-12 h-12 bg-gray-300" />;
	}

	return (
		<img
			src={sourceUri}
			alt=""
			className="w-12 h-12 object-contain"
			onError={() => setHasError(true)}
		/>
	);
};
