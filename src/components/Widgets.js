import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import pdf from '../data/resume.pdf'

const Widgets = () => {
	return (
		<div className="ui center aligned grid" style={{ marginTop: '1em' }}>
			<div className="ui horizontal list">
				<Menu.Item href="mailto: aanthonyhem@gmail.com">
					 <Icon name="envelope outline" />
				</Menu.Item>
				<Menu.Item href="https://www.instagram.com/anthony.hem/">
					 <Icon name="instagram" />
				</Menu.Item>
				<Menu.Item href="https://www.youtube.com/channel/UCHvG_DEGdQdR4CvEO0xLEuA">
					 <Icon name="youtube" />
				</Menu.Item>
				<Menu.Item href={pdf}>
					 Resume
				</Menu.Item>
			</div>
		</div>
	);
}

export default Widgets;