import React from 'react';
import RecentWorks from './RecentWorks';

const Projects = ({data}) => {
	console.log(data[0]);

	return(
		<div style={{ marginTop: '2em', marginBottom: '2em' }}>
			<div style={{marginBottom: '1em', textAlign: 'center'}}>Projects</div>
			<div className="ui three column stackable grid">
				<div className="column">
					<RecentWorks work={data[0]}/>
				</div>
				<div className="column">
					<RecentWorks work={data[1]}/>
				</div>
				<div className="column">
					<RecentWorks work={data[2]}/>
				</div>
			</div>
		</div>
	);
}

export default Projects;