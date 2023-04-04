import React from "react";
import data3 from "@data/index";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="react-skills">
      <div className="section skill is-white has-text-centered">
        <div className="container is-narrow">
          <div className="box">
            <div className="content">
              <div className="columns is-centered">
                {data3.skills.map((skill, index) => (
                  <div className="column is-page-title" key={skill.title}>
                    <div className="hero-body">{skill.img}</div>
                    <h1 className="title is-size-4 is-spaced">{skill.title}</h1>
                    <p>{skill.para}</p>
                    <p className="list-title has-text-dark has-text-weight-normal">
                      {skill.subtitle}
                    </p>
                    <p>{skill.tags}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
