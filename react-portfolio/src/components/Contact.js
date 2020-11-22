import React, { Component } from 'react';
import './About.css';
// Import Materialize
import M from 'materialize-css';

import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


class About extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return (
			<div class="container-fluid">
				<img class="hero-image" src={hero} alt="hero" />


				<div class="row">


					<div class="col s2"></div>


					<div class="col s8" id="centered-about">

<h1>Contact Me</h1>
 
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input  id="first_name" type="text" class="validate"></input>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"></input>
          <label for="last_name">Last Name</label>
        </div>
      </div>
     
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"></input>
          <label for="email">Email</label>
        </div>
      </div>
	  <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
            <label for="textarea2">Message</label>
          </div>
        </div>
		<button class="btn waves-effect waves-light grey" type="submit" name="action">Submit  
   
  </button>
    </form>
	
 
{/* <h3>Connect</h3>

	<a class="btn waves-effect waves-light grey btn-large" id = "connect" href="https://www.linkedin.com/in/lauren-hooper-8157072a"
                        target="_blank"><LinkedInIcon style={{ fontSize: 60 }}/></a>
                    <a class="btn waves-effect waves-light grey btn-large" href="https://github.com/lhooper921" target="_blank"> <GitHubIcon style={{ fontSize: 50 }}/></a>
                    <a class="btn waves-effect waves-light grey btn-large" href="https://twitter.com/LAHooper2019" target="_blank"> <TwitterIcon style={{ fontSize: 50 }} /></a>
                  */}





					</div>
				</div>





				<div class="col s2"></div>





			</div>




		)
	}
}

export default About;