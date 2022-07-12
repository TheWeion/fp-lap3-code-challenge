import React from 'react';


const GitHubCard = ({data}) => {

    return (
		<>
			<div className="github-card">
				<h2>{data.owner.login}</h2>
					<img src={data.owner.avatar_url} id= "user" image alt="users image"></img>         
			</div>
    	</>
	)

}


export default GitHubCard;