import React, { Component } from 'react';


// Import Materialize
import M from 'materialize-css';
import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg";
import dashboard from "../images/1dashboard.png"
import blackjack from "../images/1blackjack.png";
import nature from "../images/1outdoor.png";
import workday from "../images/1workday.png";
import budget from "../images/1budget.png";
import fitness from "../images/1workout.png";
import employee from "../images/1employee.png";
import quiz from "../images/1quiz.png";
import weather from "../images/1weather.png";
import tracker from "../images/Capture.PNG"
import "./Portfolio.css";
import { fab, faGithub, } from '@fortawesome/free-brands-svg-icons'
import GitHubIcon from '@material-ui/icons/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Portfolio extends Component {
	componentDidMount() {
		// Auto initialize all the things!
		M.AutoInit();
	}

	render() {

		return (

			
			<div style={{ padding: 0, textAlign: "center", }}>



				<div class="row">




					<h1>Portfolio </h1>


					<div class="row">
						<h3 style={{ paddingBottom: 50 }}> Collaborative Projects</h3>

						<div class="col s0 l2" ></div>

						{/* ==============================Company Dashboard================================== */}
						<div class="col m12 l2">
							<div class="card">
								<h5>Company Dashboard</h5>
								<h6>React | MongoDB </h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={dashboard} alt="dashboard" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://safe-anchorage-34555.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/BoringCompanyDashboard"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Company Dashboard<i class="material-icons right">close</i></span>
									<p>This application serves as the dashboard for employees of The Boring Company. Employees can send messages to each other, track their schedules, request time off, and view all the information on the main dashboard.</p>
								</div>
							</div>
						</div>

						<div class="col s0 l1"></div>

						{/* =========================Blackjack App================================= */}

						<div class="col m12 l2">
							<div class="card">
							<h5>Blackjack App</h5>
							<h6> Handlebars | Express</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={blackjack} alt="blackjack title" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://morning-plains-94430.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/blackjack-app"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Blackjack App<i class="material-icons right">close</i></span>
									<p>This application allows users to play blackjack using their own account. This account
									stores their
									chips into a database, and diplays the top players on the leaderboard (including a
									leaderboard
									preview on the index page). This application also serves as a teaching method for a
									basic game of
									blackjack and the full rules of blackjack can be found on the rules page or by
									clicking "How to
									Play" on the index page. Account information can be viewed and updated on the
			                        account page.</p>
								</div>
							</div>
						</div>

						<div class="col s0 m1"></div>

						{/* ============================Nature Itinerary=================================== */}

						<div class="col m12 l2">
							<div class="card">
							<h5>Nature Itinerary</h5>
							<h6>jQuery | Open APIs</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={nature} alt="Outdoor Itinerary Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://christ-ine.github.io/outdoor-itinerary/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/outdoor-itinerary"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Nature Itinerary<i class="material-icons right">close</i></span>
									<p>The goal of this project was to create an application capable of building and saving a plan for the day in a given city. The activities returned by the search are "social-distancing" friendly, focused on the outdoors. The day can be built by the user clicking on either restaurants or attractions they would like to visit and building their "activity list". Once the activity list is built, these items can be clicked and dragged to the planner. The planner can also accept text that is typed directly by the user.</p>
								</div>
							</div>
						</div>
						<div class="col s0 l2"></div>
					</div>



					<div class="row">
						<h3 style={{ paddingBottom: 50 }}> Individual Projects</h3>

						<div class="col s0 l2"></div>

						{/* ==========================================Workday Scheduler====================== */}
						<div class="col m12 l2">
							<div class="card">
							<h5>Workday Scheduler</h5>
							<h6>Web Storage API</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={workday} alt="Workday Scheduler Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://lhooper921.github.io/WorkdayScheduler/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/WorkdayScheduler"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Workday Scheduler<i class="material-icons right">close</i></span>
									<p>This app contains hours within a typical workday (from 9am to 5pm) and allows the user to save tasks on a specific hour. Hours are color coded for past(gray) present (red) and future (green).</p>
								</div>
							</div>
						</div>

						<div class="col s0 l1"></div>

						{/* ==============================Offline Budget Tracker=========================== */}
						<div class="col m12 l2">
							<div class="card">
							<h5>Offline Budget Tracker</h5>
							<h6>Progressive Web App</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={budget} alt="blackjack title" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://calm-fortress-92037.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/offlineBudgetTracker"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Offline Budget Tracker<i class="material-icons right">close</i></span>
									<p>The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the application will populate the total when brought back online.</p>
								</div>
							</div>
						</div>

						<div class="col s0 m1"></div>

						{/*=======================================Fitness Tracker=============================*/}

						<div class="col m12 l2">
							<div class="card">
							<h5>Fitness Tracker</h5>
							<h6>MongoDB | Express</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={fitness} alt="Fitness Tracker Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://gory-pumpkin-85153.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/fitnessTracker"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Fitness Tracker<i class="material-icons right">close</i></span>
									<p>This is a fitness tracking app utilizing a Mongo database with a Mongoose Schema and routes handles with Express. Users are able to add exercises to a previous workout plan, add new exercises to a new worklout plan, and view the combined weight of multiple exercises on the stats page.</p>
								</div>
							</div>
						</div>
						<div class="col s0 l2"></div>
					</div>

					<div class="row">
						

						<div class="col s0 l2"></div>

						{/* ==============Employee Manager====================== */}
						<div class="col m12 l2">
							<div class="card">
							<h5>Employee Manager</h5>
							<h6>MySQL | Node</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={employee} alt="Employee Manager Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://www.youtube.com/watch?v=bxz8P6Bu0uQ&feature=youtu.be"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/employee_tracker"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Employee Manager<i class="material-icons right">close</i></span>
									<p>Using mySql to manipulate and navigate multiple databases, an employee management system has been created. This application allows users to view all departments, roles, and employees as well as add new departments, roles, and employees. Each employee can also be updated to a new role.</p>
								</div>
							</div>
						</div>

						<div class="col s0 l1"></div>

						{/* ==============================Weather Dashboard=========================== */}
						<div class="col m12 l2">
							<div class="card">
							<h5>Weather Dashboard</h5>
							<h6>Server Side API</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={weather} alt="Weather Dashboard Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://lhooper921.github.io/weatherDashboard/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/weatherDashboard"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Weather Dashboard<i class="material-icons right">close</i></span>
									<p>When the user types a city name into the input field and clicks the search button, this app will generate current temperature, humidity, wind speed, and UV index. Additionally, a 5 day forecast will display for the requested city.</p>
								</div>
							</div>
						</div>

						<div class="col s0 m1"></div>

						{/*=======================================Javascript Quiz=============================*/}

						<div class="col m12 l2">
							<div class="card">
							<h5>Javascript Quiz</h5>
							<h6>Arrays | Web API</h6>
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={quiz} alt="Javascript Quiz Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://lhooper921.github.io/code-quiz-javascript/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/code-quiz-javascript"
											target="_blank"><i class="fab fa-github"></i> </a></p>
									
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Javascript Quiz<i class="material-icons right">close</i></span>
									<p>This application contains 7 questions regarding Javascript. When an incorrect answer is selected, the selected button becomes dark red and 10 seconds are deducted from the countdown timer.Once the quiz ends, the user can enter their initials to save their score on the highscores page. </p>
								</div>
							</div>
						</div>
						<div class="col s0 l2"></div>
					</div>



				</div>




			 </div>



		)
	}
}


export default Portfolio;