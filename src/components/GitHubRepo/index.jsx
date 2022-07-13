import React from "react";
import { GitCommitParse } from "..";

const GitHubRepo = ({ data }) => {
	const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data;
	return (
		<div className="github-card">
			<h3>Name: {name}</h3>
			<p>Commits: <GitCommitParse url={commits_url} /></p>
			<p>Forks: {forks}</p>
			<p>Language: {language}</p>
			<p>Stargazers: {stargazers_count}</p>
			<p>Issues: {open_issues}</p>
			<p>Watchers: {watchers}</p>
		</div>
	)
};

export default GitHubRepo;