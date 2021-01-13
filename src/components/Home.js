import React, { Component } from 'react';
import './Home.css';
// Import Materialize
import M from 'materialize-css';

import desktopBackground from '../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg';
import mobileBackground from '../images/portraitBackground.jpg'

import resume from "../images/LHResume2020.pdf";

import GetAppIcon from '@material-ui/icons/GetApp';
import PageviewIcon from '@material-ui/icons/Pageview';

class Home extends Component {
        componentDidMount() {
                // Auto initialize all the things!
                M.AutoInit();
        }

        render() {
                const imageUrl = window.innerWidth >= 650 ? desktopBackground  : mobileBackground;
                return (
                        <div style={{ backgroundImage: `url(${imageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition: 'center',
                        width: '100vw',
                        height: '100vh'
                        }}>
                        <div style={{ paddingTop: 200, textAlign: "center", }}>

                                <div class="container">
                                        <h1>Lauren Hooper</h1>
                                        <h4> Full Stack Developer</h4>
                                       
                                        {/* <a class="waves-effect waves-light btn grey " href={resume} download target="_blank"><GetAppIcon /> Download Resume</a>
                                        <a class="waves-effect waves-light btn grey " href={resume} target="_blank"><PageviewIcon /> View Resume</a> */}
                                </div>
                        </div>
</div>




                )
        }
}

export default Home;