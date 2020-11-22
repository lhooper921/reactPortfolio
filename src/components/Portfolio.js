import React, { Component } from 'react';


// Import Materialize
import M from 'materialize-css';
import hero from "../images/hamza-shaikh-ouqIpxSXdPs-unsplash.jpg";
import blackjack from "../images/index.PNG";
import nature from "../images/screenshot3.PNG";
import quiz from "../images/questionPage.PNG";
import weather from "../images/screenshotWeather.PNG";
import tracker from "../images/Capture.PNG"
import "./Portfolio.css";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Portfolio extends Component {
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
						<h1>Portfolio</h1>
						
						<ul class="collapsible expandable">
							

							<li >
							<div class="collapsible-header"><h6>Blackjack App</h6> </div>
								<div class="collapsible-body"><span>
									<div class="row">
										<div class="col m2"></div>
										<div class="col s12 m8">
											<div class="card">
												<div class="card-image">
												<img src={blackjack} alt="blackjack title" width="800px"
									height="500px"></img>

												</div>
												<div class="card-content">
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
										
										<div class="col m2"></div>
									</div>

									<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/blackjack-app"
										target="_blank">
										GitHub Repository</a>
									<a class="waves-effect waves-light btn grey" href="https://morning-plains-94430.herokuapp.com/"
										target="_blank">
										Deployed Application</a></span></div>
							</li>


							<li>
								<div class="collapsible-header"><h6>Nature Itinerary</h6></div>
								<div class="collapsible-body"><span>
									<div class="row">
										<div class="col m2"></div>
										<div class="col s12 m8">
											<div class="card">
												<div class="card-image">
													<img src={nature} alt="nature title" width="800px"
														height="500px"></img>
												</div>
												<div class="card-content">
													<p>The goal of this project was to create an application capable of building and saving
													a plan for the
													day in a given city. The activities returned by the search are "social-distancing"
													friendly, focused
													on the outdoors. The day can be built by the user clicking on either restaurants or
													attractions they
													would like to visit and building their "activity list". Once the activity list is
													built, these items
													can be clicked and dragged to the planner. The planner can also accept text that is
													typed directly
                                    by the user.</p>
												</div>
											</div>
										</div>
										<div class="col m2"></div>
									</div>

									<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/outdoor-itinerary"
										target="_blank">
										GitHub Repository</a>
									<a class="waves-effect waves-light btn grey" href=" https://christ-ine.github.io/outdoor-itinerary/"
										target="_blank">
										Deployed Application</a></span></div>
							</li>


							<li>
								<div class="collapsible-header"><h6>Javascript Quiz</h6></div>
								<div class="collapsible-body"><span>
									<div class="row">
										<div class="col m2"></div>
										<div class="col s12 m8">
											<div class="card">
												<div class="card-image">
													<img src={quiz} alt="quiz page" width="800px"
														height="500px"></img>
												</div>
												<div class="card-content">
												<p>The goal of this project was to create a Javascript quiz that meets the following
                                    acceptance
                                    criteria: GIVEN I am taking a code quiz WHEN I click the start button THEN a timer
                                    starts and I am
                                    presented with a question WHEN I answer a question THEN I am presented with another
                                    question WHEN I
                                    answer a question incorrectly THEN time is subtracted from the clock WHEN all
                                    questions are answered
                                    or the timer reaches 0 THEN the game is over WHEN the game is over THEN I can save
                                    my initials and
                                    score

                                    This application contains 7 questions regarding Javascript. When an incorrect answer
                                    is selected,
                                    the selected button becomes dark red and 10 seconds are deducted from the countdown
                                    timer. When a
                                    correct answer is selected, the selected button turns gold and no seconds are
                                    deducted from the
                                    clock. The quiz ends when either all seven questions have been answered or when the
                                    timer runs out.
                                    The user score is equal to the remaining seconds at the time of quiz end. Once the
                                    quiz ends, the
                                    user can enter their initials to save their score on the highscores page. They can
                                    then try the quiz
                                    again, navigate to the home page, or view all high scores.</p>
												</div>
											</div>
										</div>
										<div class="col m2"></div>
									</div>

									<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/code-quiz-javascript"
										target="_blank">
										GitHub Repository</a>
									<a class="waves-effect waves-light btn grey" href="https://lhooper921.github.io/code-quiz-javascript/"
										target="_blank">
										Deployed Application</a></span></div>
							</li>

							<li>
								<div class="collapsible-header"><h6>Weather Dashboard</h6></div>
								<div class="collapsible-body"><span>
									<div class="row">
										<div class="col m2"></div>
										<div class="col s12 m8">
											<div class="card">
												<div class="card-image">
													<img src={weather} alt="weather dashboard" width="800px"
														height="500px"></img>
												</div>
												<div class="card-content">
												<p>When the user types a city name into the input field and clicks the search button,
                                    this app will
                                    generate current temperature, humidity, wind speed, and UV index. Additionally, a 5
                                    day forecast
                                    will display for the requested city. Each temperature will have a corresponding icon
                                    to indicate the
                                    type of weather (rain, clouds, sunny etc). UV index is color coded as follows: red =
                                    unfavorable,
                                    yellow = moderate, and green = favorable. The site will display up to 8 previous
                                    searches. Any
                                    previous search can be clicked to perform the search again.</p>
												</div>
											</div>
										</div>
										<div class="col m2"></div>
									</div>

									<a class="waves-effect waves-light btn grey" href="https://github.com/lhooper921/weatherDashboard"
										target="_blank">
										GitHub Repository</a>
									<a class="waves-effect waves-light btn grey" href="https://lhooper921.github.io/weatherDashboard/"
										target="_blank">
										Deployed Application</a></span></div>
							</li>
							
							<li>
								<div class="collapsible-header"><h6>Employee Tracker</h6></div>
								<div class="collapsible-body"><span>
									<div class="row">
										<div class="col m2"></div>
										<div class="col s12 m8">
											<div class="card">
												<div class="card-image">
													<img src={tracker} alt="employee tracker" width="800px"
														height="500px"></img>
												</div>
												<div class="card-content">
												<p>Using mySql to manipulate and navigate multiple databases, an employee management
                                    system has been
                                    created. This application allows users to view all departments, roles, and employees
                                    as well as add
                                    new departments, roles, and employees. Each employee can also be updated to a new
                                    role.</p>
											</div>
										</div>
										<div class="col m2"></div>
									</div>

									<a class="waves-effect waves-light btn grey" href="hhttps://github.com/lhooper921/employee_tracker"
										target="_blank">
										GitHub Repository</a>
									<a class="waves-effect waves-light btn grey" href="https://youtu.be/bxz8P6Bu0uQ"
										target="_blank">
										Application Demo</a></div></span></div>
							</li>
						</ul>




					</div>


					<div class="col s2"></div>

				</div>

			</div>


		)
	}
}


export default Portfolio;