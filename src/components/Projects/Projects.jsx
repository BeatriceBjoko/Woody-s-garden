import { projectsData } from "../../data/projects";
import "./Projects.css";

const Projects = () => {
	return (
		<section className="projects" id="projects">
			<div className="projects__container">
				<div className="projects__header">
					<p className="projects__eyebrow">PORTFOLIO</p>
					<h2 className="projects__title">
						Recente <span className="projects__title-italic">projecten</span>
					</h2>
				</div>

				<div className="projects__grid">
					{projectsData.map((project) => (
						<div key={project.id} className="project-card">
							<div className="project-card__image-wrapper">
								<img src={project.image} alt={project.title} className="project-card__image" />
								<div className="project-card__overlay">
									<div className="project-card__content">
										<p className="project-card__category">{project.category}</p>
										<h3 className="project-card__title">{project.title}</h3>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="projects__footer">
					<button className="projects__cta">ZIE MEER</button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
