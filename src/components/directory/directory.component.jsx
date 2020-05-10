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
					linkURL: 'gloves',
					imageURL: sectionGloves,
					id: 1,
				},
				{
					title: 'boxing shoes',
					linkURL: '',
					imageURL: sectionBoots,
					id: 2,
				},
				{
					title: 'gear',
					linkURL: '',
					imageURL: sectionGear,
					id: 3,
				},
				{
					title: 'mens',
					linkURL: '',
					imageURL: sectionMens,
					size: 'large',
					id: 4,
				},
				{
					title: 'womens',
					linkURL: '',
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
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
