import React, { Component } from 'react';
import './Home.css';
// Import Materialize
import M from 'materialize-css';

import desktopBackground from '../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg';
import mobileBackground from '../images/portraitBackground.jpg'

import resume from "../images/laurenHooperResume2021.pdf";

import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';

class Home extends Component {
        componentDidMount() {
                // Auto initialize all the things!
                M.AutoInit();
        }

        render() {
                const imageUrl = window.innerWidth >= 650 ? desktopBackground : mobileBackground;
                return (
                        <div style={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100vw',
                                height: '100vh'
                        }}>
                                <div style={{ paddingTop: 100, textAlign: "center", }}>

                                        <div class="container">
                                                <h1 id="title">Lauren Hooper</h1>
                                                <h3> Full Stack Developer</h3>
                                                <a class="waves-effect waves-light btn grey" href={resume} target="_blank"><i style={{
                                                        color: 'white'
                                                }} class="fas fa-external-link-alt"></i> View Resume</a>

                                                <a class="waves-effect waves-light btn grey" href={resume} download target="_blank"><i style={{
                                                        color: 'white'
                                                }} class="fas fa-file-download"></i> Download Resume</a>

<div class="row">
							<h3> Skills Overview</h3>
							<div class="col l2"></div>						
    <div class="col s12 l2">
      <div class="card-panel grey ">
        <span class="white-text">
			<h5>Front End</h5>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>Javascript</li>
			<li>JQuery</li>
			<li>React</li>
			<li>Git/ Version Control</li>
			<li>Command Line</li>
				
		</ul>
        </span>
      </div>
	  </div>

	  <div class="col l1"></div>

	  <div class="col s12 l2">
      <div class="card-panel grey ">
        <span class="white-text">
		<h5>Back End</h5>
		<ul>
			<li>Node.js</li>
			<li>Express.js</li>
			<li>HTTP and REST</li>
			<li>SQL</li>
			<li>MongoDB</li>				
		</ul>
        </span>
      </div>
  </div>
<div class="col l1"></div>
  <div class="col s12 l2">
      <div class="card-panel grey ">
        <span class="white-text"><h5>Soft Skills</h5>
		<ul>
			<li>Team Development</li>
			<li>Rapid Problem Solving</li>
			<li>Conflict Resolution</li>
			<li>Time Management</li>
			<li>Clear Communication</li>				
		</ul>
        </span>
      </div>
  </div>
  <div class="col l2"></div>  
	  </div>

                                        </div>
                                </div>
                        </div>




                )
        }
}

export default Home;