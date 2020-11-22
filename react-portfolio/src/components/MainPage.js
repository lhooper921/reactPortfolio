import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';

import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';


class MainPage extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				
				<Router>
					<NavBar />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/About" component={About} />
						<Route path="/Portfolio" component={Portfolio} />
						<Route path="/Contact" component={Contact} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default MainPage;