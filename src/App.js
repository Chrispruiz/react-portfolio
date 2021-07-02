import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from "./components/Resume";
import ContactForm from './components/Contact';

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
      case "resume":
        return <Resume />;
			case "contact":
				return <ContactForm />;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;

