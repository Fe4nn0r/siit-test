import type { User } from "../types/user";

type Props = {
	user: User;
};

export const UserCard = ({ user }: Props) => {
	return (
		<div className="rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up">
			<div className="flex items-center p-4">
				<div className="flex-shrink-0">
					<div className="relative w-12 h-12 rounded-full overflow-hidden">
						<img
							src={user.avatar_url}
							alt=""
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="ml-4">
					<h3 className="text-base font-medium">{user.name}</h3>
					<p className="text-sm">{user.position}</p>
				</div>
			</div>
		</div>
	);
};
