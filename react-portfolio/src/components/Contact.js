import React, { Component } from 'react';

// Import Materialize
import M from 'materialize-css';

class Contact extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {
		return <h1> Contact</h1>;
	}
}

export default Contact;