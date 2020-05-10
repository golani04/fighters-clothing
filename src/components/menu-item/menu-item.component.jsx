import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, size, history, linkURL, match }) => (
	<div
		className={`menu-item${size ? ` ${size}` : ''}`}
		onClick={() => history.push(`${match.url}${linkURL}`)}
	>
		<div
			style={{
				backgroundImage: `url(${imageURL})`,
			}}
			className="background-image"
		/>
		<div className="content">
			<h1 className="title">{title}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
