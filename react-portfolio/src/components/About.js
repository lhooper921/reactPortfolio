import React, { Component } from 'react';
import './About.css';
// Import Materialize
import M from 'materialize-css';

import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg"
import portrait from "../images/Lauren-Wedding.jpg"

class About extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
		<div class= "container-fluid">
		<img class ="hero-image" src={hero} alt="hero" />
	   
		 
		<div class="row">
			<div class="col s0 m2"></div>
			<div class="col s12 m8" id="centered-about">
				
		 <div class="row">
			 <div class="col s0 m3">
			 <img class="portrait" src={portrait} alt="Portrait" height= "200px" width = "200px"/>
			 </div>
			 <div class="col s12 m6">
			 <h1>About Me</h1></div>
			 </div>
			 <div class="row">
			 <div class="col s12">
			 <p>
                            Before becoming a web developer, I spent 9 years as a professional chef and kitchen manager.
                            During my
                            culinary career, I learned the importance of building and maintaining strong relationships
                            with your team.
                            The kitchen is also where I learned to solve problems on the fly and maintain a positive
                            attitude in a
                            stressful environment.
                            My hobbies include playing guitar, gardening, and spending time with my dog Buddy and my cat
                            Scarlet.
                           
                           
                        </p></div></div>
						<div class="row">
							<h3> Skills Overview</h3>
							<div class="col m2"></div>						
    <div class="col s12 m2">
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

	  <div class="col m1"></div>

	  <div class="col s12 m2">
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
<div class="col m1"></div>
  <div class="col s12 m2">
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
  <div class="col m2"></div>  
	  </div>
           
						
			
			 
			 </div>
			 

			 <div class="col s2"></div>
	   
		</div>
		
		</div>

		
		)}
}

export default About;