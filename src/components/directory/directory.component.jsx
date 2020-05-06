import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import sectionGloves from './../../assets/images/sections/gloves.jpg';
import sectionBoots from './../../assets/images/sections/boots.jpg';
import sectionGear from './../../assets/images/sections/gear.jpg';
import sectionMens from './../../assets/images/sections/mens.jpg';
import sectionWomens from './../../assets/images/sections/womens.jpg';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: [
				{
					title: 'gloves',
					imageURL: sectionGloves,
					id: 1,
				},
				{
					title: 'boxing shoes',
					imageURL: sectionBoots,
					id: 2,
				},
				{
					title: 'gear',
					imageURL: sectionGear,
					id: 3,
				},
				{
					title: 'mens',
					imageURL: sectionMens,
					size: 'large',
					id: 4,
				},
				{
					title: 'womens',
					imageURL: sectionWomens,
					size: 'large',
					id: 5,
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ title, imageURL, id, size }) => (
					<MenuItem key={id} title={title} imageURL={imageURL} size={size} />
				))}
			</div>
		);
	}
}

export default Directory;
