import React from 'react';
import Blurb from './Blurb';
import Widgets from './Widgets';
import Projects from './Projects';
import * as d3 from 'd3';
import data from '../data/airtable.csv';
import { Container } from 'semantic-ui-react';


class App extends React.Component {
	state = {data: []};

	componentDidMount(){
		this.grabData();
	}

	async grabData() {
		var dataset = await d3.csv(data).then(function(data){return data;});
		this.setState({data: dataset});
	}


	render(){
		return (
			<div>
				<Container text style={{ marginTop: '2em' }}>
					<Blurb />
					<hr />
					<Projects data={this.state.data}/>
					<hr />
					<Widgets />
				</Container>
			</div>
		);
	}
}

export default App;

