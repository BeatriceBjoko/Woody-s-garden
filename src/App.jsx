import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<main>
				<Hero />
				<Services />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}

export default App;
