import { useEffect, useReducer } from "react";
import type { User } from "../types/user";

type UsersState = {
	users: User[];
	isLoading: boolean;
	isError: boolean;
	error: string | null;
};

type UsersAction =
	| { type: "FETCH_INIT" }
	| { type: "FETCH_SUCCESS"; payload: User[] }
	| { type: "FETCH_FAILURE"; payload: string };

const initialState: UsersState = {
	users: [],
	isLoading: false,
	isError: false,
	error: null,
};

const usersReducer = (state: UsersState, action: UsersAction): UsersState => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				isLoading: true,
				isError: false,
				error: null,
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				error: null,
				users: action.payload,
			};
		case "FETCH_FAILURE":
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const useUsers = () => {
	const [state, dispatch] = useReducer(usersReducer, initialState);

	useEffect(() => {
		const fetchUsers = async () => {
			dispatch({ type: "FETCH_INIT" });

			try {
				const response = await fetch("/users.json");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				dispatch({ type: "FETCH_SUCCESS", payload: data });
			} catch (error) {
				dispatch({
					type: "FETCH_FAILURE",
					payload: error instanceof Error ? error.message : "An error occurred",
				});
			}
		};

		fetchUsers();
	}, []);

	return {
		users: state.users,
		isLoading: state.isLoading,
		isError: state.isError,
		error: state.error,
	};
};
