import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("#home");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navLinks = [
		{ name: "HOME", href: "#home" },
		{ name: "DIENSTEN", href: "#diensten" },
		{ name: "OVER MIJ", href: "#over-mij" },
		{ name: "PROJECTEN", href: "#projecten" },
		{ name: "CONTACT", href: "#contact" },
	];

	useEffect(() => {
		const sectionIds = navLinks.map((link) => link.href.substring(1));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveLink(`#${entry.target.id}`);
						history.replaceState(null, "", `#${entry.target.id}`);
					}
				});
			},
			{
				rootMargin: "-40% 0px -55% 0px",
				threshold: 0,
			},
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	const handleLinkClick = (href) => {
		setActiveLink(href);
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<div className="navbar__links navbar__links--desktop">
					{navLinks.map((link) => (
						<a key={link.name} href={link.href} className={`navbar__link ${activeLink === link.href ? "navbar__link--active" : ""}`} onClick={() => handleLinkClick(link.href)}>
							{link.name}
						</a>
					))}
				</div>

				<button className={`navbar__hamburger ${isMobileMenuOpen ? "navbar__hamburger--open" : ""}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
					<span></span>
					<span></span>
					<span></span>
				</button>

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
