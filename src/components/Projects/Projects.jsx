import { useState } from "react";
import { projectsData } from "../../data/projects";
import "./Projects.css";

const INITIAL_COUNT = 3;

const Projects = () => {
	const [showAll, setShowAll] = useState(false);

	const hasMore = projectsData.length > INITIAL_COUNT;
	const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);

	return (
		<section className="projects" id="projecten">
			<div className="projects__container">
				<div className="projects__header">
					<p className="projects__eyebrow">PORTFOLIO</p>
					<h2 className="projects__title">
						Recente <span className="projects__title-italic">projecten</span>
					</h2>
				</div>

				<div className="projects__grid">
					{visibleProjects.map((project, index) => (
						<div key={project.id} className={`project-card ${index >= INITIAL_COUNT ? "project-card--reveal" : ""}`}>
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

				{hasMore && !showAll && (
					<div className="projects__footer">
						<button className="projects__cta" onClick={() => setShowAll(true)}>
							ZIE MEER
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
