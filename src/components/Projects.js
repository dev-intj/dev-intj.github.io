import React from "react";
import data from "../data";
import { IconContext } from "react-icons";
import { FaExternalLinkAlt, FaLongArrowAltRight, FaTimes, FaFolderOpen, FaBlog } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="portfolio-projects">
            <div className="container">
                <div className="projects-list">
                    {data.projects.map((project, index) => (
                        <div className="article portfoflio-project" key={index}>
                            <div>
                                <div className="portfoflio-project-thumbnail">
                                    <img src={project.img} alt="thumbnail image" />
                                    <div className="portfoflio-project-thumbnail-overlay" id={project.class}>
                                        <div className="portfoflio-project-meta"><span></span><span></span><span></span></div>
                                        <a href={project.site} className="pf-p-full-size-link"></a>
                                        <a href={project.site} className="pf-p-project-link" target="_blank">
                                            <IconContext.Provider value={{ className: "work-icons", size: 28 }}>
                                                <FaExternalLinkAlt />
                                            </IconContext.Provider>
                                        </a>
                                        {project.blog == true ? (
                                            <a className="pf-p-project-view" href={project.blogroute}>Blog
                                                <IconContext.Provider value={{ className: "work-icons", size: 18 }}>
                                                    <FaLongArrowAltRight />
                                                </IconContext.Provider>
                                            </a>
                                        ) : (
                                            <a className="pf-p-project-view" href={project.site}>View
                                                <IconContext.Provider value={{ className: "work-icons", size: 18 }}>
                                                    <FaLongArrowAltRight />
                                                </IconContext.Provider>
                                            </a>
                                        )}

                                    </div>
                                </div>
                                {project.source == true ? (
                                    <h3 className="portfoflio-project-title">
                                        {project.title} - <a href={project.source_site} target="_blank">SOURCE
                                            <IconContext.Provider value={{ className: "project-icons", size: 16 }}>
                                                <FaFolderOpen />
                                            </IconContext.Provider>
                                        </a>
                                    </h3>
                                ) : (
                                    <h3 className="portfoflio-project-title">
                                        {project.title}
                                    </h3>
                                )}

                                <div className="pf-p-portfoflio-additionals">
                                    <span className="pf-p-portfoflio-additional active">
                                        <IconContext.Provider value={{ className: "project-stages", size: 12 }}>
                                            {project.stage}
                                        </IconContext.Provider> {project.description}</span>
                                </div>

                            </div>

                        </div>

                    ))}

                </div></div></div >
    )
}
export default Projects;