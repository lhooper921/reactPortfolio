import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';

import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from "./Footer";

class MainPage extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div >
				
				<HashRouter>
					<NavBar />
					<Switch>
						<Route path="/reactPortfolio/" exact component={Home} />
						<Route path="/reactPortfolio/#/Home" component={Home} />
						<Route path="/reactPortfolio/#/About" component={About} />
						<Route path="/reactPortfolio/#/Portfolio" component={Portfolio} />
						<Route path="/reactPortfolio/#/Contact" component={Contact} />
					</Switch>
				</HashRouter>
				< Footer />
			</div>
		);
	}
}

export default MainPage;