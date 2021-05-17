import React from "react";
import PastCompanies from "../components/PastCompanies";
import data from "../data";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Layout from "../components/layout";
const About = () => {
    return (
        <Layout>
            <div className="react-about">
                <div className="section is-medium is-white has-text-centered ">
                    <div className="container">
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{data.about_header.title}</h1>
                        <h2 className="subtitle is-size-4-desktop">{data.about_header.subtitle}</h2>
                    </div>
                </div>

                {data.about1.map((about1, index) => (
                    <div className={"section is-medium has-text-centered " + (about1.class)} key={index}>
                        <div className="container">
                            <h2 className="subtitle is-size-4-desktop" >{about1.paragraph}</h2>
                        </div >
                    </div>
                ))}

                <PastCompanies />


                {data.about2.map((about2, index) => (
                    <div className={"section is-medium has-text-centered " + (about2.class)} key={index}>
                        <div className="container">
                            <h2 className="subtitle is-size-4-desktop" >{about2.paragraph}</h2>
                        </div >
                    </div>
                ))}

                <div className="section is-white has-text-centered">
                    <div className="container">
                        <h2 className="subtitle is-size-4-desktop">{data.About_contact.contact_paragraph}</h2>
                        <p></p>
                        <a href={data.About_contact.contact_email} className="has-text-white">Contact me through Email</a>
                        <p></p>

                        <Link to={'/contact'} className="button is-medium is-white luxury btn-1">
                            <span>Quickest way to grab my attention</span>
                        </Link>

                        <p></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default About;