import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PropTypes from "prop-types";

export const ProjectEntry = ({ data }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="flex flex-col ml-8 group"
      onPointerEnter={() => setOnHover(true)}
      onPointerLeave={() => setOnHover(false)}
    >
      <div className="z-50 hover:cursor-pointer relative h-72 w-auto">
        <Image src={data.img.src} alt={data.title} layout="fill" />
      </div>
      <AnimatePresence>
        {onHover && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
          >
            <div className="z-10 text-white text-left py-4 hover:cursor-pointer flex justify-between">
              <h4 className="text-lg justify-start">{data.title}</h4>
              <h2 className="text-lg justify-end">this is a test</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

ProjectEntry.propTypes = {
  data: PropTypes.object,
};

/**  <div className="portfolio-projects">
      <div className="container">
        <div className="projects-list">
          {data.projects.map((project, index) => (
            <div className="article portfoflio-project" key={index}>
              <div>
                <div className="portfoflio-project-thumbnail">
                  <img src={project.img} alt="thumbnail image" />
                  <div
                    className="portfoflio-project-thumbnail-overlay"
                    id={project.class}
                  >
                    <div className="portfoflio-project-meta">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <a href={project.site} className="pf-p-full-size-link"></a>
                    <a
                      href={project.site}
                      className="pf-p-project-link"
                      target="_blank"
                    >
                      <IconContext.Provider
                        value={{ className: "work-icons", size: 28 }}
                      >
                        <FaExternalLinkAlt />
                      </IconContext.Provider>
                    </a>
                    {project.blog == true ? (
                      <Link
                        to={project.blogroute}
                        className="pf-p-project-view"
                      >
                        Blog
                        <IconContext.Provider
                          value={{ className: "work-icons", size: 18 }}
                        >
                          <FaLongArrowAltRight />
                        </IconContext.Provider>
                      </Link>
                    ) : (
                      <a className="pf-p-project-view" href={project.site}>
                        View
                        <IconContext.Provider
                          value={{ className: "work-icons", size: 18 }}
                        >
                          <FaLongArrowAltRight />
                        </IconContext.Provider>
                      </a>
                    )}
                  </div>
                </div>
                {project.source == true ? (
                  <h3 className="portfoflio-project-title">
                    {project.title} -{" "}
                    <a href={project.source_site} target="_blank">
                      SOURCE
                      <IconContext.Provider
                        value={{ className: "project-icons", size: 16 }}
                      >
                        <FaFolderOpen />
                      </IconContext.Provider>
                    </a>
                  </h3>
                ) : (
                  <h3 className="portfoflio-project-title">{project.title}</h3>
                )}

                <div className="pf-p-portfoflio-additionals">
                  <span className="pf-p-portfoflio-additional active">
                    <IconContext.Provider
                      value={{ className: "project-stages", size: 12 }}
                    >
                      {project.stage}
                    </IconContext.Provider>{" "}
                    {project.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */
