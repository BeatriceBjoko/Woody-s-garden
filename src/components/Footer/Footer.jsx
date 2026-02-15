import { contactInfo } from "../../data/contact";
import "./Footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{ name: "Home", href: "#home" },
		{ name: "Diensten", href: "#services" },
		{ name: "Over mij", href: "#about" },
		{ name: "Projecten", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__top">
					<div className="footer__brand">
						<h3 className="footer__logo">Woody's Garden</h3>
						<p className="footer__tagline">Tuinaanleg & Tuinonderhoud</p>
					</div>

					<div className="footer__links">
						<h4 className="footer__title">Navigatie</h4>
						<nav className="footer__nav">
							{footerLinks.map((link) => (
								<a key={link.name} href={link.href} className="footer__link">
									{link.name}
								</a>
							))}
						</nav>
					</div>

					<div className="footer__contact">
						<h4 className="footer__title">Contact</h4>
						<div className="footer__contact-info">
							<a href={`mailto:${contactInfo.email}`} className="footer__contact-link">
								{contactInfo.email}
							</a>
							<a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="footer__contact-link">
								{contactInfo.phone}
							</a>
							<p className="footer__contact-text">{contactInfo.location}</p>
						</div>
					</div>
				</div>

				<div className="footer__bottom">
					<p className="footer__copyright">© {currentYear} Woody's Garden. Alle rechten voorbehouden.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
