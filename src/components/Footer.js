import React, { Component } from 'react';
// Import Materialize
import M from 'materialize-css';
import resume from "../images/laurenHooperResume2021.pdf";


class NavBar extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <footer class="footer-copyright white hide-on-med-and-down ">
        <div class='container'>

          © 2020 Lauren Hooper
              <a class="waves-effect waves-light btn grey" href="https://www.linkedin.com/in/laurenalysehooper"
            target="_blank"><i style={{ color: 'white'
            }} class="fab fa-linkedin"></i> LinkedIn</a>

          <a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921"
            target="_blank"><i style={{ color: 'white'
          }} class="fab fa-github"></i> GitHub</a>

          <a class="waves-effect waves-light btn grey" href="https://twitter.com/Lauren__Hooper"
            target="_blank"><i  style={{ color: 'white'
          }} class="fab fa-twitter-square"></i> Twitter</a>

          <a class="waves-effect waves-light btn grey" href={resume} target="_blank"><i style={{ color: 'white'
            }} class="fas fa-external-link-alt"></i> View Resume</a>

          <a class="waves-effect waves-light btn grey" href={resume} download target="_blank"><i style={{ color: 'white'
            }} class="fas fa-file-download"></i> Download Resume</a>







        </div>

      </footer>




    );
  }
}

export default NavBar;