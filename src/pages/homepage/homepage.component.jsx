import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
	<div className="homepage">
		<div className="directory-menu">
			<div className="menu-item">
				<div className="content">
					<h1 className="title">GLOVES</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">BOXING SHOES</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">GEAR</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">MEN</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">WOMEN</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</div>
	</div>
);

export default HomePage;