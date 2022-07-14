import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCommit, faHistory , faCodeFork} from "@fortawesome/free-solid-svg-icons";
import { faFileCode, faEye, faDotCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { GitCommitParse } from "..";
import './style.css';

const GitHubRepo = ({ data }) => {
	const { name, commits_url, forks, language, stargazers_count, open_issues, watchers } = data;
	return (
		<>
			<Accordion className="repo-data-container">
				<Accordion.Header>{name}</Accordion.Header>
					<Accordion.Body>
						<ListGroup className="repo-list-item" horizontal>
							<ListGroup.Item className="tool-tip">
								<FontAwesomeIcon className="icon" icon={faCodeCommit} />
								<Badge bg="primary" pill>
									{<GitCommitParse url={commits_url} />}
								</Badge>
								<span className="tooltip-text">Commits</span>
							</ListGroup.Item>
							<ListGroup.Item className="tool-tip">
								<FontAwesomeIcon className="icon" icon={faCodeFork} />
								<Badge bg="primary" pill>
									{forks}
								</Badge>
								<span className="tooltip-text">Forks</span>
							</ListGroup.Item>
							{language && 
								<ListGroup.Item className="tool-tip">
									<FontAwesomeIcon className="icon" icon={faFileCode} />
									<Badge bg="primary" pill>
										{language}
									</Badge>
									<span className="tooltip-text">Language</span>
								</ListGroup.Item>
							}
							<ListGroup.Item className="tool-tip">
								<FontAwesomeIcon className="icon" icon={faStar} />
								<Badge bg="primary" pill>
									{stargazers_count}
								</Badge>
								<span className="tooltip-text">Stargazers</span>
							</ListGroup.Item>
							<ListGroup.Item className="tool-tip">
								<FontAwesomeIcon className="icon" icon={faEye} />
								<Badge bg="primary" pill>
									{open_issues}
								</Badge>
								<span className="tooltip-text">Issues</span>
							</ListGroup.Item>
							<ListGroup.Item className="tool-tip">
								<FontAwesomeIcon className="icon" icon={faDotCircle} />
								<Badge bg="primary" pill>
									{watchers}
								</Badge>
								<span className="tooltip-text">Watchers</span>
							</ListGroup.Item>
						</ListGroup>
					</Accordion.Body>
			</Accordion>
		</>
	)
};

export default GitHubRepo;