import React, { Component } from 'react';


// Import Materialize
import M from 'materialize-css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import resume from "../images/LHResume2020.pdf";

import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';
import './Footer.css';

class NavBar extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
            <footer>        
            <div class="footer-copyright">
              <div class="container">
              © 2020 Lauren Hooper
              <a  href="https://www.linkedin.com/in/lauren-hooper-8157072a"
                        target="_blank"><LinkedInIcon />LinkedIn</a>
                    <a  href="https://github.com/lhooper921" target="_blank"><GitHubIcon /> Github</a>
                    <a href="https://twitter.com/LAHooper2019" target="_blank"><TwitterIcon /> Twitter</a>
                    <a href={resume}  download target="_blank"><GetAppIcon /> Download Resume</a>
                    <a href={resume}  target="_blank"><PageviewIcon /> View Resume</a>
              </div>
            </div>
          </footer>
		);
	}
}

export default NavBar;