import React, { useState } from "react";
import { Header, Footer } from './layouts';
import { GitHubCard } from "./components/";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
		setInterval(() => {
			setLoading(false);
		}, 5000);
	};

	return (
		<>
		<Container className="container-fluid">
			<Header />
			<Form>
				<Form.Group className="mb-3" id="search-form">
					<Form.Label>Enter GitHub username</Form.Label>
					<div class="input-group mb-2">
        				<div class="input-group-prepend">
          					<div class="input-group-text">@</div>
        				</div>
						<Form.Control type="text" placeholder="Enter GitHub username" value={formData} onChange={handleChange} />
      				</div>
				</Form.Group>
				<Button 
					variant="primary" 
					type="submit" 
					disabled={loading}
					onClick={!loading ? handleSubmit : null}
				>
					{loading ? 'Loading...' : 'Search'}
				</Button>
			</Form>
			{ !loading ? <GitHubCard username={username} /> : null}
			<Footer />
		</Container>
		</>
	)
};

export default App;