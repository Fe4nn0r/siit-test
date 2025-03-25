import * as React from "react";
import { Header } from "./components/layout/Header";
import "./global.css";
import { HomePage } from "./pages/home";
export const App = () => {
	return (
		<>
			<Header />
			<HomePage />
		</>
	);
};
