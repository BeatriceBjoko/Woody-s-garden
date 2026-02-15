import "./About.css";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__container">
				<div className="about__left">
					<div className="about__image">
						<img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200" alt="Handen met plantje - passie voor tuinen" />
					</div>
				</div>

				<div className="about__right">
					<p className="about__eyebrow">OVER MIJ</p>

					<h2 className="about__title">
						Passie voor
						<br />
						<span className="about__title-italic">groen</span>
					</h2>

					<div className="about__text">
						<p>Woody's Garden is het verhaal van Wout Walravens een jonge ondernemer met een diepe passie voor tuinen. Wat begon als een liefde voor de natuur groeide uit tot een bedrijf dat staat voor vakmanschap en creativiteit.</p>
						<p>Elke tuin is uniek, net als zijn eigenaar. Daarom luister ik eerst, dromen we samen, en creëren we dan een buitenruimte die echt bij u past. Met oog voor detail en respect voor de natuur.</p>
					</div>

					<div className="about__stats">
						<div className="about__stat">
							<div className="about__stat-number">10</div>
							<div className="about__stat-label">PROJECTEN</div>
						</div>
						<div className="about__stat-divider"></div>
						<div className="about__stat">
							<div className="about__stat-number">100%</div>
							<div className="about__stat-label">PASSIE</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
