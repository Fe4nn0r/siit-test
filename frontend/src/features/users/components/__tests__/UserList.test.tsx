import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { User } from "../../types/user";
import { UserList } from "../UserList";

const mockUsers: User[] = [
	{
		id: 1,
		name: "John Doe",
		avatar_url: "https://example.com/avatar1.jpg",
		position: "Developer",
		service_ids: [1, 2],
	},
	{
		id: 2,
		name: "Jane Smith",
		avatar_url: "https://example.com/avatar2.jpg",
		position: "Designer",
		service_ids: [3],
	},
];

describe("UserList", () => {
	it("renders user information when users are provided", () => {
		render(<UserList users={mockUsers} isLoading={false} isError={false} />);

		for (const user of mockUsers) {
			expect(screen.getByText(user.name)).toBeInTheDocument();
		}
	});
});
