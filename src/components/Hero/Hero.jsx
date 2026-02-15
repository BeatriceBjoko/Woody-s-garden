import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero" id="home">
			<div className="hero__overlay"></div>
			<div className="hero__gradient"></div>

			<div className="hero__content">
				<h1 className="hero__title">
					Woody's
					<br />
					<span className="hero__title-italic">Garden</span>
				</h1>

				<p className="hero__subtitle">
					TUINAANLEG & TUINONDERHOUD MET
					<br />
					PASSIE
				</p>

				<a href="#projects" className="hero__cta">
					ONTDEK ONS WERK
				</a>
			</div>

			<div className="hero__scroll-indicator">
				<span className="hero__scroll-text">Scroll</span>
				<div className="hero__scroll-line"></div>
			</div>
		</section>
	);
};

export default Hero;
