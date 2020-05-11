import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<ul className="footer">
			<li className="name">{name}</li>
			<li className="price">${price}</li>
		</ul>
	</div>
);

// console.log(ShopImg);

export default CollectionItem;
