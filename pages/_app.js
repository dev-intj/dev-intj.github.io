/* eslint-disable react/prop-types */
import React from "react";
import Layout from "../components/layout/layout";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_all.scss";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("I should be loading");
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
export default MyApp;
