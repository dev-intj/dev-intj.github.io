import React from "react";
import data3 from "../websiteData/data";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Skills = () => {
  const { t, i18n } = useTranslation();
  const transdata = data3;
  const data2 = t("skills", { returnObjects: true });
  console.log(data2);
  return (
    <div className="react-skills">
      <div className="section skill is-white has-text-centered">
        <div className="container is-narrow">
          <div className="box">
            <div className="content">
              <div className="columns is-centered">
                {transdata.skills.map((skill, index) => (
                  <div className="column" key={skill.title}>
                    <div>
                      <img
                        className="is-skill-icon"
                        src={skill.img}
                        alt={skill.alt}
                      />
                    </div>
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
