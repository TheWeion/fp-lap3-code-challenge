import React, { useState } from "react";
import { Header, Footer } from './layouts';
import { GitHubCard } from "./components/";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub }  from '@fortawesome/free-brands-svg-icons';

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
			<div class='background' style ={ { backgroundImage: "url('./assets/background.jpg')",
								  backgroundPosition: 'fixed',
								  backgroundAttachment: 'fixed',
								  backgroundSize: 'cover',
								  backgroundRepeat: 'no-repeat',
								  width: '100vw',
								  height: '100vh'
								  } }>
									
			<Container className="container-fluid">
				<Header />
				<Form>
					<Form.Group className="mb-3" id="search-form">
						<Form.Label>Enter GitHub username</Form.Label>
						<div class="input-group">
							<div class="input-group-prepend">
								<FontAwesomeIcon className="input-group-text" icon={faGithub} />
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
			</div>
		
		</>
	)
};

export default App;