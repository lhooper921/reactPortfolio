import React, { Component } from 'react';
import './Home.css';
// Import Materialize
import M from 'materialize-css';

import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg"
import resume from "../images/LHResume2020.pdf";

import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';

class Home extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
        return (
 <div class= "container-fluid">
 <img class ="hero-image" src={hero} alt="hero" />

  
 
  <div class="centered">
      <h1>Lauren Hooper</h1>
      <h4> Full Stack Developer</h4>
      <a class="waves-effect waves-light btn grey " href={resume}  download target="_blank"><GetAppIcon /> Download Resume</a>
                    <a class="waves-effect waves-light btn grey " href={resume} target="_blank"><PageviewIcon /> View Resume</a>
    
      </div>

 </div>

 
        )}
}

export default Home;
