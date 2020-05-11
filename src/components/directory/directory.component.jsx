import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [
				{
					title: 'gloves',
					linkURL: 'gloves',
					imageURL: '/images/sections/gloves.jpg',
					id: 1,
				},
				{
					title: 'boxing shoes',
					linkURL: '',
					imageURL: '/images/sections/boots.jpg',
					id: 2,
				},
				{
					title: 'gear',
					linkURL: '',
					imageURL: '/images/sections/gear.jpg',
					id: 3,
				},
				{
					title: 'mens',
					linkURL: '',
					imageURL: '/images/sections/mens.jpg',
					size: 'large',
					id: 4,
				},
				{
					title: 'womens',
					linkURL: '',
					imageURL: '/images/sections/womens.jpg',
					size: 'large',
					id: 5,
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
