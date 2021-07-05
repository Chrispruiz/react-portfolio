import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/Chrispruiz">
					<img
						src={require("../../assets/images/GitHub-logo.png")?.default}
						alt="Github"
                        className="githubLogo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/chrispruiz/">
					<img
						src={require("../../assets/images/Linkedin-logo.png")?.default}
						alt="LinkedIn"
                        className="linkedInLogo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
