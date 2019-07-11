import React from 'react';
import {
  Header,
  Image,
} from 'semantic-ui-react'

const Blurb = () => {
	return (
		<div style={{ marginBottom: '1em' }}>
			<Image className='ui small circular left floated image' 
				   src={require('../images/profile.JPG')} 
				   alt='mwuah' 
				   />
			<Header style={{ marginBottom: '0.8em' }} as='h1'>Pleasure to meet you! (o:</Header>
			<p>
				An empathetic sponge striving to bridge people together via technology. I enjoy helping others accomplish their goals through project management and by doing my best to understand/discover their true needs.
			</p>
			<p>
				My freetime is spent dancing, reading, and playing 2nd Dad to my 4 younger siblings. Feel free to reach out!
			</p>
		</div>
	);
};

export default Blurb;