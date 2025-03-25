type Props = {
	children: React.ReactNode;
};

export const ErrorMessage = ({ children }: Props) => {
	return (
		<div className="py-8 items-center flex-col flex">
			<div className="text-red-700 p-4 border-red-700 border rounded-lg">
				{children}
			</div>
		</div>
	);
};
