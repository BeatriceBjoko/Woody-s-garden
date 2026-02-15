import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<main>
				<Hero />
				<Services />
			</main>
		</div>
	);
}

export default App;
