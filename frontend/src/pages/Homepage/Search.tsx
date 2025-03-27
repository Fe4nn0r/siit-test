import type { ChangeEvent } from "react";
import { SearchIcon } from "../../icons/SearchIcon";

type Props = {
	searchText: string;
	onSearchTextChange: (_searchText: string) => void;
};
export const Search = ({ searchText, onSearchTextChange }: Props) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		onSearchTextChange(value);
	};

	return (
		<div className="mb-12">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<SearchIcon width={20} height={20} />
				</div>
				<input
					type="text"
					placeholder="Search users and services..."
					className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					onChange={handleInputChange}
					value={searchText}
				/>
			</div>
		</div>
	);
};
