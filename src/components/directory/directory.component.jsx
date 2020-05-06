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
					imageURL: '../../assets/images/gloves/gloves-section.jpg',
					id: 1,
				},
				{
					title: 'boxing shoes',
					imageURL: '../../assets/images/gloves/gloves-section.jpg',
					id: 1,
				},
				{
					title: 'gear',
					imageURL: '../../assets/images/gloves/gloves-section.jpg',
					id: 1,
				},
				{
					title: 'mens',
					imageURL: '../../assets/images/gloves/gloves-section.jpg',
					id: 1,
				},
				{
					title: 'womens',
					imageURL: '../../assets/images/gloves/gloves-section.jpg',
					id: 1,
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ title, imageURL, id }) => (
					<MenuItem key={id} title={title} imageURL={imageURL} />
				))}
			</div>
		);
	}
}

export default Directory;
