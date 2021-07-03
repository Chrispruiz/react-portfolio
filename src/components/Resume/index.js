import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">Technical Skills</h1>
			</div>
			<div className="bottom-spacing">
				{/* <a href={require("../../assets/files/Owais' Resume.pdf")} download>
					<h4>Download my Resume</h4>
				</a> */}
			</div>
            <br></br>
			<div>
				<h5>Front-End</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Back-End</h5>
				<ol>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>RESTful APIs</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
                <h5>Database</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
                <br></br>
				<h5>Dev Tools</h5>
				<ol>
					<li>Git</li>
					<li>Heroku</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;