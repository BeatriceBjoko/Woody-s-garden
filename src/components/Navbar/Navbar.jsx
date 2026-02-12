import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeLink, setActiveLink] = useState("#home");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "HOME", href: "#home" },
		{ name: "SERVICES", href: "#services" },
		{ name: "ABOUT", href: "#about" },
		{ name: "PROJECTS", href: "#projects" },
		{ name: "CONTACT", href: "#contact" },
	];

	return (
		<nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
			<div className="navbar__container">
				<a href="#home" className="navbar__logo">
					Woody's Garden
				</a>

				<div className="navbar__links">
					{navLinks.map((link) => (
						<a key={link.name} href={link.href} className={`navbar__link ${activeLink === link.href ? "navbar__link--active" : ""}`} onClick={() => setActiveLink(link.href)}>
							{link.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
