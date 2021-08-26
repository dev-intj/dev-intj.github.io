import React from "react";
import Skills from "../components/Skills";

import Header from "../components/HomePage/Header";
import HeaderF from "../components/HomePage/HeaderFooter";

import Layout from "../components/layout";
const Home = () => {
    return (
        <Layout>
            <div className="home">
                <div className="columns is-gapless">
                    <div className="column">
                    <Header />
                    </div>
                    <div className="column">
                    <HeaderF />
                    </div>
                
                </div> 
                <Skills />
            </div>
        </Layout>
    )
}
export default Home;