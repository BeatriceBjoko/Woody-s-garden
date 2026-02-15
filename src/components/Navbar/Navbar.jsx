import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("#home");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ name: "HOME", href: "#home" },
		{ name: "DIENSTEN", href: "#services" },
		{ name: "OVER MIJ", href: "#about" },
		{ name: "PROJECTEN", href: "#projects" },
		{ name: "CONTACT", href: "#contact" },
	];

	const handleLinkClick = (href) => {
		setActiveLink(href);
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<div className="navbar__links navbar__links--desktop">
					{navLinks.map((link) => (
						<a key={link.name} href={link.href} className={`navbar__link ${activeLink === link.href ? "navbar__link--active" : ""}`} onClick={() => setActiveLink(link.href)}>
							{link.name}
						</a>
					))}
				</div>

				{/* Mobile Hamburger Button */}
				<button className={`navbar__hamburger ${isMobileMenuOpen ? "navbar__hamburger--open" : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
					<span></span>
					<span></span>
					<span></span>
				</button>

				{/* Mobile Menu */}
				<div className={`navbar__mobile ${isMobileMenuOpen ? "navbar__mobile--open" : ""}`}>
					<div className="navbar__mobile-content">
						{navLinks.map((link) => (
							<a key={link.name} href={link.href} className={`navbar__mobile-link ${activeLink === link.href ? "navbar__mobile-link--active" : ""}`} onClick={() => handleLinkClick(link.href)}>
								{link.name}
							</a>
						))}
					</div>
				</div>
			</div>

			{isMobileMenuOpen && <div className="navbar__overlay" onClick={() => setIsMobileMenuOpen(false)} />}
		</nav>
	);
};

export default Navbar;
