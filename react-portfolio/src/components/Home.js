import React, { Component } from 'react';
import './Home.css';
// Import Materialize
import M from 'materialize-css';

import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg"

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
      
      </div>

 </div>

 
        )}
}

export default Home;
