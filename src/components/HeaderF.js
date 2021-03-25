import React from "react";
import data from "../data";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const HeaderF = () => {
    return (


        <div className="react-header-footer">
            <section className="section is-halfheight is-primary has-text-centered">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">{data.header.header_footer_title}</h1>
                            <h2 className="subtitle is-size-5-desktop ">
                                {data.header.header_footer_subtitle}
                            </h2>
                        </div>
                    </div>
                    <Link to="/about" className="button is-medium is-dark luxury btn-1" >
                        <span>Learn more about me</span>
                    </Link>
                </div >
            </section >

        </div >

    )
}
export default HeaderF;

