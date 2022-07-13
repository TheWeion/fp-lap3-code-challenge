import React, { useEffect, useState } from "react";
import axios from "axios";

const GitCommitParse = ({ url }) => {
	const [commits, setCommits] = useState();

	useEffect(() => {
		const parseRepo = async () => {
			const OPTS = {
				headers: { Accept: "application/vnd.github.v3+json" }
			}
			const { data } = await axios.get(url.replace(/{\/sha}$/, ''), OPTS);
			setCommits(data.length);
		}
		parseRepo();
	}, [url]);

	return(
		<>
			{commits}
		</>
	)
};

export default GitCommitParse;
