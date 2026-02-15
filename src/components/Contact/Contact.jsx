import { useState } from "react";
import { contactInfo } from "../../data/contact";
import "./Contact.css";

const Contact = () => {
	const [status, setStatus] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;

		try {
			const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
				method: "POST",
				body: new FormData(form),
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				setStatus("success");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch (error) {
			setStatus("error");
		}
	};

	return (
		<section className="contact" id="contact">
			<div className="contact__container">
				<div className="contact__left">
					<p className="contact__eyebrow">CONTACT</p>
					<h2 className="contact__title">
						Laten we <span className="contact__title-italic">samenwerken</span>
					</h2>

					<p className="contact__description">Heeft u een project in gedachten of wilt u gewoon eens vrijblijvend praten over de mogelijkheden voor uw tuin? Neem gerust contact op.</p>

					<div className="contact__info">
						<div className="contact__info-item">
							<p className="contact__info-label">EMAIL</p>
							<a href={`mailto:${contactInfo.email}`} className="contact__info-value">
								{contactInfo.email}
							</a>
						</div>

						<div className="contact__info-item">
							<p className="contact__info-label">TELEFOON</p>
							<a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="contact__info-value">
								{contactInfo.phone}
							</a>
						</div>

						<div className="contact__info-item">
							<p className="contact__info-label">LOCATIE</p>
							<p className="contact__info-value">{contactInfo.location}</p>
						</div>
					</div>
				</div>

				<div className="contact__right">
					<form className="contact__form" onSubmit={handleSubmit}>
						<div className="contact__form-group">
							<label htmlFor="name" className="contact__form-label">
								NAAM
							</label>
							<input type="text" id="name" name="name" required className="contact__form-input" />
						</div>

						<div className="contact__form-group">
							<label htmlFor="email" className="contact__form-label">
								EMAIL
							</label>
							<input type="email" id="email" name="email" required className="contact__form-input" />
						</div>

						<div className="contact__form-group">
							<label htmlFor="message" className="contact__form-label">
								BERICHT
							</label>
							<textarea id="message" name="message" required rows="6" className="contact__form-textarea" />
						</div>

						<button type="submit" className="contact__form-submit">
							VERSTUUR
						</button>

						{status === "success" && <p className="contact__form-message contact__form-message--success">Bedankt! Uw bericht is verzonden.</p>}

						{status === "error" && <p className="contact__form-message contact__form-message--error">Er is iets misgegaan. Probeer het opnieuw.</p>}
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
