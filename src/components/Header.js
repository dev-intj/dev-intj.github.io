import React from "react";
import data from "../data";
import { IconContext } from "react-icons";

const Header = () => {
    return (
        <div className="react-header">
            <div className="hero is-halfheight is-white has-text-centered ">
                <div className="hero-body home">
                    <div className="container">
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{data.header.header_title}</h1>
                        <h2 className="subtitle is-size-4-desktop">{data.header.header_subtitle}</h2>

                        {data.social_media.map((social, index) => (
                            <a className="button socialmedia is-dark is-medium btn-ghost" target="_blank" href={social.link} key={social.name}>
                                <span className="icon">
                                    <IconContext.Provider value={{ className: "fab fa-lg", size: 26 }}>
                                        {social.icon}
                                    </IconContext.Provider>

                                </span>
                            </a>
                        ))}

                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container">
                        <div className="columns is-vcentered is-multiline is-mobile">
                            <div className="container column is-half">
                                <div className="loading">
                                    <div className="absolute">
                                        <div className="finger finger-1">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="finger finger-2">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="finger finger-3">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="finger finger-4">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="last-finger">
                                            <div className="last-finger-item"><i></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container column mirror is-half">
                                <div className="loading">
                                    <div className="absolute">
                                        <div className="finger finger-1">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="finger finger-2">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="finger finger-3">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="finger finger-4">
                                            <div className="finger-item">
                                                <span></span><i></i>
                                            </div>
                                        </div>
                                        <div className="last-finger">
                                            <div className="last-finger-item"><i></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header;