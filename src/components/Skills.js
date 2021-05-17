import React from "react";
import data from "../data";

const Skills = () => {
    return (
        <div className="react-skills">
            <div className="section skill is-white has-text-centered">
                <div className="container is-narrow">
                    <div className="box">
                        <div className="content">
                            <div className="columns is-centered">

                                {data.skills.map((skill, index) => (
                                    <div className="column" key={skill.title}>
                                        <div>
                                            <img className="is-skill-icon" src={skill.img} alt={skill.alt} />
                                        </div>
                                        <h1 className="title is-size-4 is-spaced">{skill.title}</h1>
                                        <p>{skill.para}</p>
                                        <p className="list-title has-text-dark has-text-weight-normal">{skill.subtitle}</p>
                                        <p>{skill.tags}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;