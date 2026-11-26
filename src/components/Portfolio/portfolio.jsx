import React, { useState } from "react";
import "./portfolio.scss";
import Title_Data from "../../data/titleData";
import Portfolio_Data from "../../data/PortfolioData";

const Portfolio = () => {
  // 🔹 récupérer toutes les skills pour les filtres
  const allSkills = Portfolio_Data.flatMap((p) => p.p_filter || []);
  const uniqueTabs = Array.from(new Set(allSkills));
  const tabs = ["All Projects", ...uniqueTabs];

  const [activeTab, setActiveTab] = useState("All Projects");

  // 🔹 filtrage
  const filteredProjects =
    activeTab === "All Projects"
      ? Portfolio_Data
      : Portfolio_Data.filter((project) =>
          project.p_filter?.includes(activeTab),
        );

  return (
    <div id="portfolio" className="bg-bloc">
      <div className="container">
        <div className="portfolio">
          {/* Description */}
          <div className="bloc-desc mb-5">
            <div className="bloc-title">
              <div className="subtitle">Featured Work</div>
              <h2>{Title_Data.portfolio_title}</h2>
            </div>
            <p>
              These projects played a key role in helping me learn and master a wide range of front-end and testing skills.
            </p>
          </div>

          {/* Onglets Horizontaux (Tabs) */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5" data-aos="fade-down">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`filter-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {/* Content */}
            {filteredProjects.map((project, index) => {
              // 🔹 Combiner p_skills_1, p_skills_2 et p_skills (si existants)
              const projectSkills = [
                ...(project.p_skills_1 || []),
                ...(project.p_skills_2 || []),
                ...(project.p_skills_3 || []),
                ...(project.p_skills || []),
              ];

              return (
                <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up">
                  <div className="card card-custom h-100">
                    {/* Image du projet avec badge de catégorie optionnel */}
                    <div className="position-relative overflow-hidden">
                      <a
                        href={project.p_demo || project.p_site || project.p_report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card project-card"
                      >
                        <img
                          src={project.p_img}
                          className="card-img-top"
                          alt={project.p_title}
                        />
                        <div className="title-hover">
                          <h5 className="card-title">{project.p_title}</h5>
                        </div>
                      </a>
                      <span className="project-badge">
                        {project.p_filter?.[0] || "Project"}
                      </span>
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between p-4">
                      <div>
                        {/* Affichage combiné des compétences (p_skills_1 & p_skills_2) */}
                        <div className="d-flex flex-wrap gap-1 mb-3">
                          {projectSkills.map((skill, sIdx) => (
                            <span key={sIdx} className="badge badge-custom">
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                          {project.p_demo && (
                            <a
                              href={project.p_demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none small-link text-demo"
                            >
                              Live Demo →
                            </a>
                          )}
                          {project.p_site && (
                            <a
                              href={project.p_site}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none small-link text-demo"
                            >
                              View Site →
                            </a>
                          )}
                          {project.p_report && (
                            <a
                              href={project.p_report}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none small-link text-demo"
                            >
                              View Report →
                            </a>
                          )}
                          {project.p_code_source && (
                            <a
                              href={project.p_code_source || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-dark github-icon"
                            >
                              <i className="fa-brands fa-github"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;