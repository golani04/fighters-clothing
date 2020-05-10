import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const GlovesPage = () => (
	<div>
		<h1>Gloves page</h1>
	</div>
);

function App() {
	return (
		<main>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/gloves" component={GlovesPage} />
			</Switch>
		</main>
	);
}

export default App;
