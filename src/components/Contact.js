import React, { Component } from 'react';
import './About.css';
// Import Materialize
import M from 'materialize-css';

import resume from "../images/laurenHooperResume2021.pdf";
import phone from "../images/nathan-dumlao-vKiXuwnE6wU-unsplash.jpg"

import "./Contact.css"
class Contact extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (



      <div class="container-fluid" style={{
        padding: 0,
        textAlign: "center",
        height: "100%",
        
      }}>





        <div class="row">
          <h1>Contact Me</h1>

        </div>

        <div class="row">
          <div class="col m12 l7">
            <h4 >Start a conversation </h4>

            <h6 style={{ paddingBottom: '28px' }} ><i style={{ marginRight: "25px", color: "grey" }} class="far fa-envelope fa-2x"></i>  Email: <a href="mailto:lhooper921@gmail.com">lhooper921@gmail.com</a></h6>

            <h4> Connect on social media  </h4>

            <h6 style={{ paddingBottom: '28px' }}><i style={{ marginRight: "25px", color: "grey" }} class="fab fa-linkedin-in fa-2x"></i>  LinkedIn: <a style={{ color: 'black' }} href="https://www.linkedin.com/in/laurenalysehooper">laurenalysehooper</a></h6>
            <h4>View my work </h4>
            <h6 style={{ paddingBottom: '28px' }}><i style={{ marginRight: "25px", color: "grey" }} class="fab fa-github fa-2x"></i>  GitHub: <a style={{ color: 'black' }} href="https://github.com/lhooper921">lhooper921</a></h6>







          </div>

          <div class="col m12 l3" style={{ textAlign: "center", }}>
            <img src={phone} width="350px"></img>

          </div>


        </div>
      </div>


    )
  }
}

export default Contact;