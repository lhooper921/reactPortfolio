import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Materialize
import M from 'materialize-css';
import logo from '../images/logo.png'

import './NavBar.css';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div>
			<nav>
			<div className="nav-wrapper valign-wrapper white">
			
				<a href="#" data-target="mobile-demo" class="sidenav-trigger">
					<i class="material-icons">menu</i>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down ">
				<li>
				<Link to="/Home" className="navlink">
					Home
				</Link>
			</li>
			<li>
				<Link to="/About" className="navlink">
					About
				</Link>
			</li>
			<li>
				<Link to="/Portfolio" className="navlink">
					Portfolio
				</Link>
			</li>
			<li>
				<Link to="/Contact" className="navlink">
					Contact
				</Link>
			</li>
				
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-demo">
			<li>
				<Link to="/Home" className="navlink">
					Home
				</Link>
			</li>
			<li>
				<Link to="/About" className="navlink">
					About
				</Link>
			</li>
			<li>
				<Link to="/Portfolio" className="navlink">
					Portfolio
				</Link>
			</li>
			<li>
				<Link to="/Contact" className="navlink">
					Contact
				</Link>
			</li>
			
            
		
		</ul>
		</div>
			// <div id="navbar">
			// 	<ul className="nav">
					
			// 		<Link to="/Home">
			// 			<li className="navlink">Home </li>
			// 		</Link>
			// 		<Link to="/About">
			// 			<li className="navlink">About </li>
			// 		</Link>
			// 		<Link to="/Portfolio">
			// 			<li className="navlink">Portfolio </li>
			// 		</Link>
			// 		<Link to="/Contact">
			// 			<li className="navlink">Contact</li>
			// 		</Link>
			// 	</ul>
			// </div>
		);
	}
}

export default NavBar;