import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GitHubRepo } from '..';

const GitHubCard = ({ username }) => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		let cancelRequest = false;
		const fetchRepos = async () => {
			const OPTS = {
				headers: { Accept: 'application/vnd.github.v3+json' }
			}
			const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, OPTS);
			if (cancelRequest) return;
			setRepos(data);
		}

		fetchRepos();
		return () => cancelRequest = true;

	}, [username]);

	const renderRepos = () => repos.map((repo, id) => <GitHubRepo key={id} data={repo} />);

    return (
		<>
			<div className="github-card">
				{ renderRepos() }
			</div>
    	</>
	)
}


export default GitHubCard;