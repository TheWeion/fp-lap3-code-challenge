import React from "react";
import { IndexPage } from "./pages";
import { default as Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";

import './App.css';

const App = () => {
	return (
		<>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<IndexPage />} />
					</Route>
				</Routes>
		</>
	)
};

export default App;