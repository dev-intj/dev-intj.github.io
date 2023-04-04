import React from "react";
import data from "@data/index";
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <div className="react-footer">
            <div className="section is-small is-primary has-text-centered">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h2 className="title is-size-4 is-spaced">Designing, Coding &amp; Improving</h2>
                            {/*<a className="button is-white is-medium luxury btn-2" href="/" target="_blank">
                                <span>Switch Languages</span>
                            </a> */}

                        </div>
                        <div className="column">

                            {data.social_media.map((social) => (
                                <a className="button socialmedia is-white is-medium btn-ghost" target="_blank" href={social.link} key={social.name}>
                                    <span className="icon">
                                        <IconContext.Provider value={{ size: 28 }}>
                                            {social.icon}
                                        </IconContext.Provider>
                                    </span>
                                </a>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;