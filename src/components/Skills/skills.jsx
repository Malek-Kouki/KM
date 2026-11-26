import React, { useState } from "react";
import "./skills.scss";
import Title_Data from "../../data/titleData";

const Skills = () => {
    const skillCategories = [
        {
        category: "Langages & Frameworks",
            skills: [
                { 
                    name: "Java", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" 
                },
                { 
                    name: "Angular", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" 
                },
                { 
                    name: "React", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" 
                },
                { 
                    name: "JavaScript", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                },
                { 
                    name: "PHP", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" 
                },
                { 
                    name: "HTML5", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" 
                },
                { 
                    name: "CSS3", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" 
                },
                { 
                    name: "Sass", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" 
                },
                { 
                    name: "Bootstrap", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" 
                },
            ],
        },
        {
        category: "Tests & Automatisation",
            skills: [
                {
                    name: "Selenium",
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg",
                },
                { 
                    name: "TestNG", 
                    logo: "./src/assets/TestNg.png" 
                },
                { 
                    name: "Cucumber (BDD)", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cucumber/cucumber-plain.svg" 
                },
                { 
                    name: "Maven", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg" 
                },
            ],
        },
        {
        category: "Tools QA & Dev",
            skills: [
                { 
                    name: "VsCode", 
                    logo: "./src/assets/vscode.png" 
                },
                { 
                    name: "Git / GitHub", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" 
                },
                { 
                    name: "Eclipse IDE", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/eclipse/eclipse-original.svg" 
                },
                { 
                    name: "Squash TM", 
                    logo: "https://tm-fr.doc.squashtest.com/v12/resources/icon_SquashTM.svg"
                },
                { 
                    name: "Postman", 
                    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
                },
                { 
                    name: "Jenkins", 
                    logo: "./src/assets/jenkins.png"                 
                },
                { 
                    name: "WampServer", 
                    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/WampServer-logo.png" 
                },
                { 
                    name: "Jira / Trello", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg" 
                },
            ],
        },
        {
        category: "CMS & Design / SEO",
            skills: [
                { 
                    name: "WordPress", 
                    logo: "./src/assets/WordPress.png"                 
                },
                { 
                    name: "Figma", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" 
                },
                { 
                    name: "Canva", 
                    logo: "./src/assets/canva.jpg"
                },
                { 
                    name: "Google Analytics (GA4)", 
                    logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg"
                },
                { 
                    name: "Google Search Console", 
                    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" 
                },
                { 
                    name: "Matomo / SEO", 
                    logo: "./src/assets/matomo.png"  
                },
            ],
        },
    ];
    return (
        <div id="skills">
            <div className="container">
                <div className="skills">
                    <div className="bloc-desc mb-4">
                        <div className="bloc-title">
                            <div className="subtitle">Skills & Stack</div>
                            <h2>{Title_Data.skills_title}</h2>
                        </div>
                        <p>
                            Here are the core technologies, tools, and testing frameworks that drive my development and QA workflows.
                        </p>
                    </div>
                    {/* Affichage des catégories de compétences */}
                    {skillCategories.map((cat, cIdx) => (
                        <div key={cIdx} className="mb-5">
                            <h3 className="category-title text-center mb-4">{cat.category}</h3>
                            <div className="row g-3 justify-content-center" data-aos="fade-up">
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                        <div className="skill-card h-100">
                                            <div className="skill-logo-wrapper mb-2">
                                                <img 
                                                    src={skill.logo} 
                                                    alt={skill.name} 
                                                    className="skill-logo"
                                                />
                                            </div>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;