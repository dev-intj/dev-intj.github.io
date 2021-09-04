import React from "react";
import { IconContext } from "react-icons";

// the hoc
import { withNamespaces } from "react-i18next";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const HeaderF = () => {
  const { t, i18n } = useTranslation();
  const data = t("data", { returnObjects: true });
  return (
    <section className="section is-halfhalf is-headerfooter is-primary has-text-centered">
      <div className="container">
        <div className="box">
          <div class="columns is-vcentered is-multiline is-mobile">
            <div class="container column is-half">
              <div class="loading">
                <div class="finger finger-1">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="finger finger-2">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="finger finger-3">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="finger finger-4">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="last-finger">
                  <div class="last-finger-item">
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="container column mirror is-half">
              <div class="loading">
                <div class="finger finger-1">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="finger finger-2">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="finger finger-3">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="finger finger-4">
                  <div class="finger-item">
                    <span></span>
                    <i></i>
                  </div>
                </div>
                <div class="last-finger">
                  <div class="last-finger-item">
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
          <Link to="/about" className="button is-medium is-dark luxury btn-1">
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
