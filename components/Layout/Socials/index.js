import React from "react";
import Button from "../../Button";

import {
  Twitter,
  LinkedIn,
  Youtube,
  Email,
  Github,
} from "../../../utils/icons";

const Socials = () => {
  const btn = "h-10 w-10 justify-center";

  return (
    <div className="flex flex-wrap mob:flex-nowrap link gap-2 mt-2 laptop:mt-5">
      <Button
        onClick={() =>
          window.open(
            "https://github.com/dev-intj"
          )
        }
        classes={btn}
      >
        <Github />
      </Button>

      <Button
        onClick={() =>
          window.open("https://shorturl.at/HbEK9")
        }
        classes={btn}
      >
        <Twitter />
      </Button>

      <Button
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/christos-dematas-a50452169"
          )
        }
        classes={btn}
      >
        <LinkedIn />
      </Button>

      <Button
        onClick={() =>
          window.open("https://shorturl.at/Z0UnN")
        }
        classes={btn}
      >
        <Youtube />
      </Button>

      <Button
        onClick={() =>
          window.open(
            "mailto:demataschristiano@gmail.com"
          )
        }
        classes={btn}
      >
        <Email />
      </Button>
    </div>
  );
};

export default Socials;
