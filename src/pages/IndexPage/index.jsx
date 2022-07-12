import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { GitHubCard } from '../../components/GitHubCard';

const IndexPage = () => {
	  const [repos, setRepos] = useState([]);
	  const [loading, setLoading] = useState(false);
	  const USERNAME = '';

	useEffect(() => {
		setLoading(true);
		axios.get(`https://api.github.com/users/${USERNAME}/repos`)
			.then(res => {
				setRepos(res.data);
				setLoading(false);
			}).catch(err => {
				console.log(err);
				setLoading(false);
			}
		);
	}, []);

	  return (
		<>
			<h1>GitHub Repo Tracker</h1>
			<div className="github-card-container">
				{ loading ? <em>Loading...</em> : repos.map(repo => <GitHubCard key={repo.id} repo={repo} />)}
			</div>
		</>
  );
};

export default IndexPage;