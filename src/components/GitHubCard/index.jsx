import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { GitHubRepo } from '..';
import './style.css';

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
			<Accordion.Item className="repo-list-container p-5" eventKey="0">
				{ renderRepos() }
			</Accordion.Item>
    	</>
	)
}


export default GitHubCard;