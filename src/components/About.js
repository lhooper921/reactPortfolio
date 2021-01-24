import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg"
import portrait from "../images/laurenChefPortrait.jpg"
import beach from "../images/oceanBeach.jpg"
import ucsd from "../images/UCSDLogo-Extension-Stacked_BlueGold-copy.png"
import culinary from "../images/culinary.png"

class About extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div class="container" style={{ padding: 0, textAlign: "center", }}>





				<div class="row">
					<h1>About Me</h1>
				</div>

				<div class="row">
					<div class="col m12 l7">
						<p> <h3 style={{ textAlign: "center", }}>Professional Summary</h3>	
						As a developer, I have found an outlet for my creativity in both the server-side and client-side development of my projects. I have worked on multiple collaborative projects where my primary role was to balance functionality and design. Working with others has allowed me to harness their unique insight to find unexpected solutions to complex issues. </p><p> 
			  			In 2020, I earned my certificate in Web Development from the UCSD Extension Full Stack Boot Camp, a 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js and React. My goal is to build on these skills and to continuously push myself beyond my comfort zone to learn as much as possible.</p>
 		

							



						</div>

					<div class="col m12 l3" style={{ textAlign: "center"}}>   <img src={beach} height="350px" width="350px"></img>
<img src={ucsd}  width="350px" style={{ padding: "35px" }} />
					</div>


				</div>


				<div class="row">

					<div class="col m12 l3" style={{ textAlign: "center"}}> <img style={{  marginLeft:'auto', marginRight:'auto'}} src={portrait} height="350px" width="350px">

					</img>
					<img src={culinary}  width="350px" style={{ padding: "35px",  }} />
					</div>
					<div class="col l1" style={{ textAlign: "right", }}></div>

					<div class="col m12 l7" style={{ textAlign: "center", }}>
						<p ><h3 style={{ textAlign: "center", }}>Background</h3>
						Born and raised in San Diego, California I have found opportunities to explore just about any creative pursuit that interests me.  Whether creating musical, visual, or culinary arts, I have learned the most from immersing myself into the community and learning from talented individuals that were willing to share with me. </p>
						<p>For over 10 years, I have been in professional kitchens as a line cook, manager, and coordinator. The key to my success is adaptability, coachability, and clear communication. In 2014, I earned a certificate in Culinary Arts from San Diego Culinary Institute, where I learned the fundamentals of fine cuisine. After graduation I spent time as an intern, learning from a diverse group of chefs, while simultaneously maintaining a kitchen manager role. </p>
						<p> As a manager, the goal was to build solid teams by creating a collaborative environment that fostered the professional growth of everyone involved. A restaurant kitchen requires efficient problem solving while maintaining a positive attitude in a stressful environment, especially when leading a team. I am confident in my ability to take the valuable lessons I learned in the kitchen and apply them to future projects.</p>
					
					</div>
					
				</div>
				<div class="row hide-on-med-and-up" id="skills">
							<h3> Skills Overview</h3>
							<div class="col l2"></div>						
    <div class="col s12 l2">
      <div class="card-panel grey " style={{ opacity: '82%'}}>
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
      <div class="card-panel grey" style={{ opacity: '82%'}}>
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
      <div class="card-panel grey" id="skillCard" style={{ opacity: '82%'}}>
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







		)
	}
}

export default About;