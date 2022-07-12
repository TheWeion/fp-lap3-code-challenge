import React from "react";
import { IndexPage } from "./pages";
import { Route, Routes } from "react-router-dom";

import './App.css';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<IndexPage />} />	
			</Routes>
		</>
	)
};

export default App;