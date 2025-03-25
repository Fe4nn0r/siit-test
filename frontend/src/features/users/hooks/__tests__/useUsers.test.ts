import { act, renderHook } from "@testing-library/react";
import { useUsers } from "../useUsers";

const mockFetch = jest.fn();
const unmockedFetch = global.fetch;

describe("useUsers", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		global.fetch = mockFetch;
	});

	afterEach(() => {
		global.fetch = unmockedFetch;
	});

	it("should fetch users successfully", async () => {
		const mockUsers = [
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

		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockUsers,
		});

		const { result } = renderHook(() => useUsers());

		expect(result.current.isLoading).toBe(true);
		expect(result.current.isError).toBe(false);
		expect(result.current.users).toEqual([]);

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.isLoading).toBe(false);
		expect(result.current.isError).toBe(false);
		expect(result.current.users).toEqual(mockUsers);
		expect(mockFetch).toHaveBeenCalledWith("/users.json");
	});

	it("should handle fetch error", async () => {
		mockFetch.mockRejectedValueOnce(new Error("Network error"));

		const { result } = renderHook(() => useUsers());

		expect(result.current.isLoading).toBe(true);
		expect(result.current.isError).toBe(false);
		expect(result.current.users).toEqual([]);

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(result.current.isLoading).toBe(false);
		expect(result.current.isError).toBe(true);
		expect(result.current.error).toBe("Network error");
		expect(result.current.users).toEqual([]);
	});
});
