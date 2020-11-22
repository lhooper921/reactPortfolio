import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';


import './NavBar.css';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
				<ul className="nav">
					
					<Link to="/">
						<li className="navlink">Home </li>
					</Link>
					<Link to="/About">
						<li className="navlink">About </li>
					</Link>
					<Link to="/Portfolio">
						<li className="navlink">Portfolio </li>
					</Link>
					<Link to="/Contact">
						<li className="navlink">Contact</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default NavBar;