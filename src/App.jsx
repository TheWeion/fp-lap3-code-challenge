import React, { useState } from "react";
// insert header/footer inport once created
import { GitHubCard } from "./components/";

import './App.css';

const App = () => {
	const [formData, setFormData] = useState('');
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUsername(formData);
		setLoading(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit} id="search-form">
				<label htmlFor="txtUsername">Username</label>
				<input id="txtUsername" name='txtUsername' type="text" value={formData} onChange={handleChange} />
				<button type="submit">Search</button>
			</form>
			{ loading ? <em>Loading...</em> : <GitHubCard username={username} />}
		</>
	)
};

export default App;