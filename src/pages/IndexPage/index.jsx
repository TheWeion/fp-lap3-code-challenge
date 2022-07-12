import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GitHubCard } from '../../components/GitHubCard';

const IndexPage = () => {
	  const [repos, setRepos] = useState([]);
	  const [loading, setLoading] = useState(true);
	  const USERNAME = 'TheWeion';

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const { data } = await axios.get(`https://api.github.com/users/${USERNAME}/repos`);
				setRepos(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
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