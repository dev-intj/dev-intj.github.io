import React from "react";
import Skills from "@/components/Skills";

import Header from "@/components/HomePage/Header";
import HeaderF from "@/components/HomePage/HeaderFooter";

import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="homeanimbg"></div>
        <div className="columns is-gapless">
          <div className="column">
            <Header />
          </div>
          <div className="column">
            <HeaderF />
          </div>
        </div>
      </div>
      <Skills />
    </Layout>
  );
};

export default Home;
