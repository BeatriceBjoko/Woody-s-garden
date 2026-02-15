import { useState } from "react";
import { servicesData } from "../../data/services";
import "./Services.css";

const Services = () => {
	const [activeService, setActiveService] = useState(0);

	return (
		<section className="services" id="services">
			<div className="services__container">
				<div className="services__left">
					<p className="services__eyebrow">WAT WIJ DOEN</p>
					<h2 className="services__title">
						Diensten met
						<br />
						<span className="services__title-italic">aandacht</span>
					</h2>

					<div className="services__image">
						<img src={servicesData[activeService].image} alt={servicesData[activeService].title} />
					</div>
				</div>

				<div className="services__right">
					<div className="services__list">
						{servicesData.map((service) => (
							<button key={service.id} className={`services__item ${activeService === service.id ? "services__item--active" : ""}`} onClick={() => setActiveService(service.id)} type="button">
								<div className="services__item-header">
									<span className="services__number">{service.number}</span>
									<h3 className="services__item-title">{service.title}</h3>
								</div>
								<p className="services__item-description">{service.description}</p>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
