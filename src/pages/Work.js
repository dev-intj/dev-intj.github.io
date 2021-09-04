import React from "react";
import Projects from "../components/Projects";
import data from "../websiteData/data";
import { IconContext } from "react-icons";
import Layout from "../components/layout";

const Work = () => {
  return (
    <Layout>
      <div className="react-work">
        <section className="section is-primary has-text-centered is-small">
          <div className="container" id="recentWork">
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                  My Recent Work
                </h1>
                <h2 className="subtitle is-size-5-desktop">
                  Some Projects I feel proud of:
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="section is-white has-text-centered is-small">
          <h3 className="portfoflio-project-title">
            Explanation of the symbols:
          </h3>
          <div className="pf-p-portfoflio-additionals">
            {data.stages.map((stage, index) => (
              <span className="pf-p-portfoflio-additional active" key={index}>
                <IconContext.Provider
                  value={{ className: "work-icons", size: 14 }}
                >
                  {stage.icon}
                </IconContext.Provider>{" "}
                {stage.description}
              </span>
            ))}
          </div>
        </section>

        <Projects />
      </div>
    </Layout>
  );
};
export default Work;
