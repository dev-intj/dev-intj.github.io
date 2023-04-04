import projects from "@data/index";
import { IconContext } from "react-icons";
import {
  FaExternalLinkAlt,
  FaLongArrowAltRight,
  FaTimes,
  FaFolderOpen,
  FaBlog,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export const ProjectEntry = ({ project }) => {
  const router = useRouter();

  const GoToLink = (link, blank = null) => {
    if (blank) {
      window.open(link);
    } else {
      router.push(link);
    }
  };

  return (
    <div className="article portfoflio-project">
      <div>
        <div className="portfoflio-project-thumbnail">
          <img src={project.img.src} alt="thumbnail image" />
          <div
            className="portfoflio-project-thumbnail-overlay"
            id={project.class}
          >
            <div className="portfoflio-project-meta">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a
              onClick={() => GoToLink(project.site)}
              className="pf-p-full-size-link"
            ></a>
            <a
              onClick={() => GoToLink(project.site)}
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
              <a
                onClick={() => GoToLink(project.blogroute)}
                className="pf-p-project-view"
              >
                Blog
                <IconContext.Provider
                  value={{ className: "work-icons", size: 18 }}
                >
                  <FaLongArrowAltRight />
                </IconContext.Provider>
              </a>
            ) : (
              <a
                className="pf-p-project-view"
                onClick={() => GoToLink(project.site)}
              >
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
            <a onClick={() => GoToLink(project.site, true)}>
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
  );
};
