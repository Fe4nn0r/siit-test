import { ErrorMessage } from "../../../components/ErrorMessage";
import { NoResults } from "../../../components/NoResults";
import type { User } from "../types/user";
import { UserCard } from "./UserCard";

type Props = {
	isError: boolean;
	isLoading: boolean;
	users?: User[];
};

export const UserList = ({ users, isLoading, isError }: Props) => {
	if (isError) {
		return <ErrorMessage>Failed to load users</ErrorMessage>;
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

	if (users?.length === 0) {
		return <NoResults>No employees found</NoResults>;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{users?.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
};
