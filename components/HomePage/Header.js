import React from "react";
import { IconContext } from "react-icons";
import data from "@data/index";

const Header = () => {
  return (
    <section className="section is-halfhalf is-header">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              {data.header.header_footer_title}
            </h1>
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              {data.header.header_title}
            </h1>
            <h2 className="subtitle is-size-5-desktop ">
              {data.header.header_footer_subtitle}
            </h2>

            {data.social_media.map((social, index) => (
              <a
                className="button socialmedia is-dark is-medium btn-ghost"
                target="_blank"
                href={social.link}
                key={social.name}
              >
                <span className="icon">
                  <IconContext.Provider
                    value={{ className: "fab fa-lg", size: 26 }}
                  >
                    {social.icon}
                  </IconContext.Provider>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
