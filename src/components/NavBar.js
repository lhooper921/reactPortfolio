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
			<nav>
			<div className="nav-wrapper white">
			
			{/* <a id="logo" style={{ color: 'white', backgroundColor: 'darkgray',  opacity: '80%',
            }}href="#" class="brand-logo">Lauren Hooper</a> */}
				<a href="#" data-target="mobile-demo" class="sidenav-trigger">
					<i class="material-icons">menu</i>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down ">
				<li>
				<Link to="/reactPortfolio/Home" className="navlink">
					Home
				</Link>
			</li>
			<li>
				<Link to="/reactPortfolio/About" className="navlink">
					About
				</Link>
			</li>
			<li>
				<Link to="/reactPortfolio/Portfolio" className="navlink">
					Portfolio
				</Link>
			</li>
			<li>
				<Link to="/reactPortfolio/Contact" className="navlink">
					Contact
				</Link>
			</li>
				
				</ul>
			</div>
		</nav>

		<ul class="sidenav" id="mobile-demo">
			<li>
				<Link to="/reactPortfolio/Home" className="navlink">
					Home
				</Link>
			</li>
			<li>
				<Link to="/reactPortfolio/About" className="navlink">
					About
				</Link>
			</li>
			<li>
				<Link to="/reactPortfolio/Portfolio" className="navlink">
					Portfolio
				</Link>
			</li>
			<li>
				<Link to="/reactPortfolio/Contact" className="navlink">
					Contact
				</Link>
			</li>
			
            
		
		</ul>
		</div>
			
		);
	}
}

export default NavBar;