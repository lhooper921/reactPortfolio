import React, { Component } from 'react';


// Import Materialize
import M from 'materialize-css';
import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg";
import dashboard from "../images/1dashboard.png"
import blackjack from "../images/1blackjack.png";
import nature from "../images/1outdoor.png";
import workday from "../images/1workday.png";
import budget from "../images/1budget.png";
import quiz from "../images/questionPage.PNG";
import weather from "../images/screenshotWeather.PNG";
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

			// <div class="container-fluid">
			// 	<img class="hero-image" src={hero} alt="hero" />


			// 	<div class="row">

			// 		<div class="col s2"></div>
			// 		<div class="col s8" id="centered-about">
			// 			<h1>Portfolio</h1>

			// 			<ul class="collapsible expandable">


			// 				<li >
			// 				<div class="collapsible-header"><h6>Blackjack App</h6> </div>
			// 					<div class="collapsible-body"><span>
			// 						<div class="row">
			// 							<div class="col m2"></div>
			// 							<div class="col s12 m8">
			// 								<div class="card">
			// 									<div class="card-image">
			// 									<img src={blackjack} alt="blackjack title" width="800px"
			// 						height="500px"></img>

			// 									</div>
			// 									<div class="card-content">
			// 									<p>This application allows users to play blackjack using their own account. This account
			// 						stores their
			// 						chips into a database, and diplays the top players on the leaderboard (including a
			// 						leaderboard
			// 						preview on the index page). This application also serves as a teaching method for a
			// 						basic game of
			// 						blackjack and the full rules of blackjack can be found on the rules page or by
			// 						clicking "How to
			// 						Play" on the index page. Account information can be viewed and updated on the
			//                         account page.</p>
			// 									</div>
			// 									</div>
			// 								</div>

			// 							<div class="col m2"></div>
			// 						</div>

			// 						<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/blackjack-app"
			// 							target="_blank">
			// 							GitHub Repository</a>
			// 						<a class="waves-effect waves-light btn grey" href="https://morning-plains-94430.herokuapp.com/"
			// 							target="_blank">
			// 							Deployed Application</a></span></div>
			// 				</li>


			// 				<li>
			// 					<div class="collapsible-header"><h6>Nature Itinerary</h6></div>
			// 					<div class="collapsible-body"><span>
			// 						<div class="row">
			// 							<div class="col m2"></div>
			// 							<div class="col s12 m8">
			// 								<div class="card">
			// 									<div class="card-image">
			// 										<img src={nature} alt="nature title" width="800px"
			// 											height="500px"></img>
			// 									</div>
			// 									<div class="card-content">
			// 										<p>The goal of this project was to create an application capable of building and saving
			// 										a plan for the
			// 										day in a given city. The activities returned by the search are "social-distancing"
			// 										friendly, focused
			// 										on the outdoors. The day can be built by the user clicking on either restaurants or
			// 										attractions they
			// 										would like to visit and building their "activity list". Once the activity list is
			// 										built, these items
			// 										can be clicked and dragged to the planner. The planner can also accept text that is
			// 										typed directly
			//                         by the user.</p>
			// 									</div>
			// 								</div>
			// 							</div>
			// 							<div class="col m2"></div>
			// 						</div>

			// 						<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/outdoor-itinerary"
			// 							target="_blank">
			// 							GitHub Repository</a>
			// 						<a class="waves-effect waves-light btn grey" href=" https://christ-ine.github.io/outdoor-itinerary/"
			// 							target="_blank">
			// 							Deployed Application</a></span></div>
			// 				</li>


			// 				<li>
			// 					<div class="collapsible-header"><h6>Javascript Quiz</h6></div>
			// 					<div class="collapsible-body"><span>
			// 						<div class="row">
			// 							<div class="col m2"></div>
			// 							<div class="col s12 m8">
			// 								<div class="card">
			// 									<div class="card-image">
			// 										<img src={quiz} alt="quiz page" width="800px"
			// 											height="500px"></img>
			// 									</div>
			// 									<div class="card-content">
			// 									<p>The goal of this project was to create a Javascript quiz that meets the following
			//                         acceptance
			//                         criteria: GIVEN I am taking a code quiz WHEN I click the start button THEN a timer
			//                         starts and I am
			//                         presented with a question WHEN I answer a question THEN I am presented with another
			//                         question WHEN I
			//                         answer a question incorrectly THEN time is subtracted from the clock WHEN all
			//                         questions are answered
			//                         or the timer reaches 0 THEN the game is over WHEN the game is over THEN I can save
			//                         my initials and
			//                         score

			//                         This application contains 7 questions regarding Javascript. When an incorrect answer
			//                         is selected,
			//                         the selected button becomes dark red and 10 seconds are deducted from the countdown
			//                         timer. When a
			//                         correct answer is selected, the selected button turns gold and no seconds are
			//                         deducted from the
			//                         clock. The quiz ends when either all seven questions have been answered or when the
			//                         timer runs out.
			//                         The user score is equal to the remaining seconds at the time of quiz end. Once the
			//                         quiz ends, the
			//                         user can enter their initials to save their score on the highscores page. They can
			//                         then try the quiz
			//                         again, navigate to the home page, or view all high scores.</p>
			// 									</div>
			// 								</div>
			// 							</div>
			// 							<div class="col m2"></div>
			// 						</div>

			// 						<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/code-quiz-javascript"
			// 							target="_blank">
			// 							GitHub Repository</a>
			// 						<a class="waves-effect waves-light btn grey" href="https://lhooper921.github.io/code-quiz-javascript/"
			// 							target="_blank">
			// 							Deployed Application</a></span></div>
			// 				</li>

			// 				<li>
			// 					<div class="collapsible-header"><h6>Weather Dashboard</h6></div>
			// 					<div class="collapsible-body"><span>
			// 						<div class="row">
			// 							<div class="col m2"></div>
			// 							<div class="col s12 m8">
			// 								<div class="card">
			// 									<div class="card-image">
			// 										<img src={weather} alt="weather dashboard" width="800px"
			// 											height="500px"></img>
			// 									</div>
			// 									<div class="card-content">
			// 									<p>When the user types a city name into the input field and clicks the search button,
			//                         this app will
			//                         generate current temperature, humidity, wind speed, and UV index. Additionally, a 5
			//                         day forecast
			//                         will display for the requested city. Each temperature will have a corresponding icon
			//                         to indicate the
			//                         type of weather (rain, clouds, sunny etc). UV index is color coded as follows: red =
			//                         unfavorable,
			//                         yellow = moderate, and green = favorable. The site will display up to 8 previous
			//                         searches. Any
			//                         previous search can be clicked to perform the search again.</p>
			// 									</div>
			// 								</div>
			// 							</div>
			// 							<div class="col m2"></div>
			// 						</div>

			// 						<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/weatherDashboard"
			// 							target="_blank">
			// 							GitHub Repository</a>
			// 						<a class="waves-effect waves-light btn grey" href="https://lhooper921.github.io/weatherDashboard/"
			// 							target="_blank">
			// 							Deployed Application</a></span></div>
			// 				</li>

			// 				<li>
			// 					<div class="collapsible-header"><h6>Employee Tracker</h6></div>
			// 					<div class="collapsible-body"><span>
			// 						<div class="row">
			// 							<div class="col m2"></div>
			// 							<div class="col s12 m8">
			// 								<div class="card">
			// 									<div class="card-image">
			// 										<img src={tracker} alt="employee tracker" width="800px"
			// 											height="500px"></img>
			// 									</div>
			// 									<div class="card-content">
			// 									<p>Using mySql to manipulate and navigate multiple databases, an employee management
			//                         system has been
			//                         created. This application allows users to view all departments, roles, and employees
			//                         as well as add
			//                         new departments, roles, and employees. Each employee can also be updated to a new
			//                         role.</p>
			// 								</div>
			// 							</div>
			// 							<div class="col m2"></div>
			// 						</div>

			// 						<a class="waves-effect waves-light btn grey" href="hhttps://github.com/lhooper921/employee_tracker"
			// 							target="_blank">
			// 							GitHub Repository</a>
			// 						<a class="waves-effect waves-light btn grey" href="https://youtu.be/bxz8P6Bu0uQ"
			// 							target="_blank">
			// 							Application Demo</a></div></span></div>
			// 				</li>
			// 			</ul>




			// 		</div>


			// 		<div class="col s2"></div>

			// 	</div>

			// </div>
			<div style={{  padding: 50, textAlign: "center", }}>



				<div class="row">




					<h1>Portfolio </h1>


					<div class="row">
						<h3> Collaborative Projects</h3>

						<div class="col s0 l2"></div>

{/* ==============================Company Dashboard================================== */}
						<div class="col s12 l2">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={dashboard} alt="dashboard" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://safe-anchorage-34555.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/BoringCompanyDashboard"
											target="_blank"><i class="fab fa-github"></i> </a></p>
											<h6>React, MongoDB </h6>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Company Dashboard<i class="material-icons right">close</i></span>
									<p>This application serves as the dashboard for employees of The Boring Company. Employees can send messages to each other, track their schedules, request time off, and view all the information on the main dashboard.</p>
								</div>
							</div>
						</div>

						<div class="col s0 l1"></div>

{/* =========================Blackjack App================================= */}

						<div class="col s12 l2">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={blackjack} alt="blackjack title" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://morning-plains-94430.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/blackjack-app"
											target="_blank"><i class="fab fa-github"></i> </a></p>
											<h6>MVC, Handlebars, Express</h6>
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

						<div class="col s12 l2">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={nature} alt="Outdoor Itinerary Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://christ-ine.github.io/outdoor-itinerary/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/outdoor-itinerary"
											target="_blank"><i class="fab fa-github"></i> </a></p>
											<h6>Javascript, jQuery, Open APIs</h6>
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
						<h3> Individual Projects</h3>

						<div class="col s0 l2"></div>

{/* ==========================================Workday Scheduler====================== */}
						<div class="col s12 l2">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={workday} alt="Workday Scheduler Screenshot" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://lhooper921.github.io/WorkdayScheduler/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/WorkdayScheduler"
											target="_blank"><i class="fab fa-github"></i> </a></p>
											<h6>Web Storage API</h6>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Workday Scheduler<i class="material-icons right">close</i></span>
									<p>This app contains hours within a typical workday (from 9am to 5pm) and allows the user to save tasks on a specific hour. Hours are color coded for past(gray) present (red) and future (green).</p>
								</div>
							</div>
						</div>

						<div class="col s0 l1"></div>

{/* ==============================Offline Budget Tracker=========================== */}
						<div class="col s12 l2">
							<div class="card">
								<div class="card-image waves-effect waves-block waves-light">
									<img class="activator" src={budget} alt="blackjack title" ></img>
								</div>
								<div class="card-content">
									<span class="card-title activator grey-text text-darken-1">Read More <i class="fas fa-chevron-up"></i> </span>
									<p><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="Deployed Application" href="https://calm-fortress-92037.herokuapp.com/"
										target="_blank"> <i class="material-icons">open_in_new</i></a><a class="btn tooltipped btn-floating btn-large waves-effect waves-light red lighten-2" data-tooltip="GitHub Repository" href="https://github.com/lhooper921/offlineBudgetTracker/blob/main/README.md"
											target="_blank"><i class="fab fa-github"></i> </a></p>
											<h6>Progressive Web App</h6>
								</div>
								<div class="card-reveal">
									<span class="card-title grey-text text-darken-4">Offline Budget Tracker<i class="material-icons right">close</i></span>
									<p>The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the application will populate the total when brought back online.</p>
								</div>
							</div>
						</div>

						<div class="col s0 m1"></div>

						<div class="col s12 l2">
							<div class="card">
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
						<div class="col s0 l2"></div>
					</div>





				</div>




			</div>



		)
	}
}


export default Portfolio;