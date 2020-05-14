import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/boxing_gloves.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
	<header className="main-header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<nav className="options">
			<Link className="option" to="/shop">
				shop
			</Link>
			<Link className="option" to="/contact">
				contact
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					Sign out
				</div>
			) : (
				<Link className="option" to="signin">
					Sign in
				</Link>
			)}
		</nav>
	</header>
);

export default Header;
