import React from "react";
import "./about.scss";
import Title_Data from "../../data/titleData";

const About = () => {
  return (
    <div id="about" className="bg-bloc">
      <div className="container">
        <div className="about">
          
          <div className="bloc-title">
            <div className="subtitle">Background & Expertise</div>
            <h2>{Title_Data.about_title}</h2>
          </div>

          <div className="row gy-4">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="card p-4 h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4 gap-3">
                    <div className="icon-square bg-icon">
                      <i className="fa-solid fa-user-gear"></i>
                    </div>
                    <h3 className="fw-bold mb-0">My Profile</h3>
                  </div>
                  <p className="mb-3">
                    I am a front-end developer with a strong passion for everything related to IT, and I'm always eager to explore new technologies.
                  </p>
                  <p className="mb-4">
                    For me, front-end development is more than just a skill — it's a true passion that drives me to approach every project with care, precision, and full commitment. Combine that with my <span className="fw-bold">QA testing background</span>, and I deliver clean, robust web solutions.
                  </p>
                  <div className="border-top pt-4">
                    <ul className="mb-0 d-flex flex-column gap-2">
                      <li className="d-flex align-items-center icon-circle">
                        <i className="fa-solid fa-circle-check me-2"></i>
                        <span>Thorough End-to-End & API testing precision</span>
                      </li>
                      <li className="d-flex align-items-center icon-circle">
                        <i className="fa-solid fa-circle-check me-2"></i>
                        <span>Modern responsive design & UI/UX principles</span>
                      </li>
                      <li className="d-flex align-items-center icon-circle">
                        <i className="fa-solid fa-circle-check me-2"></i>
                        <span>Collaborative team mindset & Agile workflow</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-up">
              <div className="row right-cards g-4">
                <div className="col-md-6">
                  <div className="card p-4 h-100">
                    <div className="card-content">
                      <div className="icon-square bg-icon mb-3">
                        <i className="fa-solid fa-code"></i>
                      </div>
                      <h4 className="fw-bold mb-2">Front-End Development</h4>
                      <p className="description mb-3">
                        Building responsive, accessible, and fast web user interfaces.
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge badge-custom">HTML5/CSS3</span>
                      <span className="badge badge-custom">JavaScript</span>
                      <span className="badge badge-custom">Angular</span>
                      <span className="badge badge-custom">React</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card p-4 h-100">
                    <div className="card-content">
                      <div className="icon-square bg-icon mb-3">
                        <i className="fa-solid fa-bug-slash"></i>
                      </div>
                      <h4 className="fw-bold mb-2">QA & Automation</h4>
                      <p className="description mb-3">
                        Designing test suites, bug tracking, and automated validation.
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge badge-custom badge-purple">Selenium</span>
                      <span className="badge badge-custom">Cucumber</span>
                      <span className="badge badge-custom">Postman</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card p-4 h-100">
                    <div className="card-content">
                      <div className="icon-square bg-icon mb-3">
                        <i className="fa-brands fa-wordpress"></i>
                      </div>
                      <h4 className="fw-bold mb-2">CMS</h4>
                      <p className="description mb-3">
                        Custom theme integration and dynamic web development.
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge badge-custom">WordPress</span>
                      <span className="badge badge-custom">PHP</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card p-4 h-100">
                    <div className="card-content">
                      <div className="icon-square bg-icon mb-3">
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                      </div>
                      <h4 className="fw-bold mb-2">Tools & Methodology</h4>
                      <p className="description mb-3">
                        Designing test suites, bug tracking, and automated validation.
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge badge-custom">Git / GitHub</span>
                      <span className="badge badge-custom">Jira</span>
                      <span className="badge badge-custom">Agile / Scrum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;