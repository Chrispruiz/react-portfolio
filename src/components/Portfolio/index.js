import React from 'react';
import Projects from '../Projects';

function Portfolio() {
	const projects = [
		{
			name: 'Travel Blogger',
			description:
				'Travel Blogger is a site for travelers to meet, share experiences, stories, photos, and plan future trips. ',
			image: 'Travel-blogger.png',
			github: 'https://github.com/Chrispruiz/tech-blog.git',
			deployed: 'https://serene-tor-80949.herokuapp.com/',
		},
		{
			name: 'Tech Blog',
			description:
				'Tech-Blog is a blogging website built using Model View Controller (MVC) where users can create an account to be to post blogs and comment on other posts. The application uses Handlebars.js, Sequelize, Express, Bulma for styling, and dotenv.',
			image: 'Tech-blog.png',
			github: 'https://github.com/Chrispruiz/tech-blog',
			deployed: 'https://powerful-lake-33458.herokuapp.com/',
		},
		{
			name: 'A Storm is Brewing',
			description:
				"This is a brewery finder that lists breweries and weather for a particular city based on a user's search. We wanted to create something that would be useful to a user to know the weather for a particular city they may be traveling to that same day. It has a search history that saves the user's searches in local storage for convenient recall.",
			image: 'brewing.png',
			github: 'https://github.com/Chrispruiz/Project',
			deployed: 'https://chrispruiz.github.io/Project/',
		},
		{
			name: 'Express Your Notes',
			description:
				'Express-Your-Notes is a note taking web application that allows a user to create, edit, and delete notes.',
			image: 'Note.gif',
			github: 'https://github.com/Chrispruiz/Team-Profile-Generator',
			deployed: 'https://gentle-journey-45170.herokuapp.com/',
		},
		{
			name: 'Budget-Tracker',
			description:
				'Budget-Tracker is a way for users to be able to track their money whether they have an internet connection or not.',
			image: 'Budget-tracker.png',
			github: 'https://github.com/Chrispruiz/Budget-Tracker',
			deployed: 'https://enigmatic-sands-93879.herokuapp.com/',
		},
		{
			name: 'SQL Employee Tracker',
			description: 
				'This is a database that stores information on employees, roles, salaries, and departments. Users can view, add, update, and delete roles, departments, and employees.',
			image: 'EmployeeTracker.gif',
			github: 'https://github.com/Chrispruiz/SQL-Employee-Tracker',
			/* deployed: '', */
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Projects projects={projects[0]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[1]}></Projects>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Projects projects={projects[2]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[3]}></Projects>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Projects projects={projects[4]}></Projects>
					</li>
					<li className="padding">
						<Projects projects={projects[5]}></Projects>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
