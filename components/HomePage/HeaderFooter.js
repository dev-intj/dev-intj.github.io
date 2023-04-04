import React from "react";
import data from "@data/index";
import Link from "next/link";

const HeaderF = () => {
  return (
    <section className="section is-halfhalf is-headerfooter is-primary has-text-centered">
      <div className="container">
        <div className="box">
          <div className="columns is-vcentered is-multiline is-mobile">
            <div className="container column is-half">
              <div className="loading">
                <div className="finger finger-1">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="finger finger-2">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="finger finger-3">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="finger finger-4">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="last-finger">
                  <div className="last-finger-item">
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="container column mirror is-half">
              <div className="loading">
                <div className="finger finger-1">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="finger finger-2">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="finger finger-3">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="finger finger-4">
                  <div className="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div className="last-finger">
                  <div className="last-finger-item">
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <h2 className="subtitle is-size-5-desktop">
              {data.header.header_footer_subtitle}
            </h2>
          </div>
          <Link href="/about" className="button is-medium is-dark luxury btn-1">
            <span>Learn more about me</span>
          </Link>
        </div>
      </div>
      <div className="boxbg b1"></div>
      <div className="boxbg b2"></div>
      <div className="boxbg b3"></div>
      <div className="boxbg b4"></div>
      <div className="boxbg b5"></div>
    </section>
  );
};
export default HeaderF;
