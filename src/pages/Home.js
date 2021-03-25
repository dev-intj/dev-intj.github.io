import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import HeaderF from "../components/HeaderF";
import Layout from "../components/layout";
const Home = () => {
    return (
        <Layout>
            <div className="Home">
                <Header />
                <HeaderF />
                <Skills />
            </div>
        </Layout>
    )
}
export default Home;