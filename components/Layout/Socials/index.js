import React from "react";
import Button from "../../Button";

import {
  Twitter,
  LinkedIn,
  Youtube,
  Email,
  Github,
} from "../../../utils/icons";

const Socials = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-wrap mob:flex-nowrap link`}
    >
      <Button onClick={() => window.open("https://github.com/dev-intj")}>
        <Github />
      </Button>

      <Button onClick={() => window.open("https://shorturl.at/HbEK9")}>
        <Twitter />
      </Button>

      <Button onClick={() => window.open("https://www.linkedin.com/in/christos-dematas-a50452169")}>
        <LinkedIn />
      </Button>

      <Button onClick={() => window.open("https://shorturl.at/Z0UnN")}>
        <Youtube />
      </Button>

      <Button onClick={() => window.open("mailto:demataschristiano@gmail.com")}>
        <Email />
      </Button>
    </div>
  );
};

export default Socials;
