import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCommit, faHistory , faCodeFork} from "@fortawesome/free-solid-svg-icons";
import { faFileCode, faEye, faDotCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { GitCommitParse } from "..";
import './style.css';

const GitHubRepo = ({ data }) => {
	const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data;
	return (
		<div className="repo-list-container">
			<h1>{name}</h1>
			<ul className="repo-data-container">
				<li className="tooltip">
					<FontAwesomeIcon className="icon" icon={faCodeCommit} />
					<GitCommitParse url={commits_url} />
					<span className="tooltip-text">Commits</span>
				</li>
				<li className="tooltip">
					<FontAwesomeIcon className="icon" icon={faCodeFork} />
					{forks}
					<span className="tooltip-text">Forks</span>
				</li>
				{language && 
					<li className="tooltip">
					<FontAwesomeIcon className="icon" icon={faFileCode} />
					{language}
					<span className="tooltip-text">Language</span>
				</li>
				}
				<li className="tooltip">
					<FontAwesomeIcon className="icon" icon={faStar} />
					{stargazers_count}
					<span className="tooltip-text">Stargazers</span>
				</li>
				<li className="tooltip">
					<FontAwesomeIcon className="icon" icon={faEye} />
					{open_issues}
					<span className="tooltip-text">Issues</span>
				</li>
				<li className="tooltip">
					<FontAwesomeIcon className="icon" icon={faDotCircle} />
					{watchers}
					<span className="tooltip-text">Watchers</span>
				</li>
				<li>{language}</li>
			</ul>
		</div>
	)
};

export default GitHubRepo;