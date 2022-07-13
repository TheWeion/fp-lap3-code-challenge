import React from "react";
import { GitCommitParse } from "..";

const GitHubRepo = ({ data }) => {
	const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data;

	return (
		<div className="github-card">
			<h3>{name}</h3>
			<p><GitCommitParse url={commits_url} /></p>
			<p>{forks}</p>
			<p>{language}</p>
			<p>{stargazers_count}</p>
			<p>{open_issues}</p>
			<p>{watchers}</p>
		</div>
	)
};

export default GitHubRepo;