import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/Chrispruiz"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/images/GitHub-logo.png")?.default}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/chrispruiz/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{/* <img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img> */}
				</a>
			</div>
		</footer>
	);
}

export default Footer;
