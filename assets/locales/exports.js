//Importing Icons and Images

/*
//Skills
import backendIcon from "../../../assets/images/skills/back-end.svg";
import frontendIcon from "../../../assets/images/skills/front-end.svg";
import uiuxdesIcon from "../../../assets/images/skills/uiux-des.svg";

//Project Thumbnails
import RuneRagnarok from "../../../assets/images/projects/runeragnarok.png";
import SixteenQuotes from "../../../assets/images/projects/sixteenquotes.png";
import NetflixQDes from "../../../assets/images/projects/netflix.png";
import Dorito from "../../../assets/images/projects/dorito.png";
import Wallpapers from "../../../assets/images/projects/wallpapers.png";


//Past companies
import EdgeOfReality from "../../../assets/images/past-companies/edge-of-reality-logo.png";
import HumanHeadStudios from "../../../assets/images/past-companies/Humanheadlogo.png";
import SoakCom from "../../../assets/images/past-companies/soak-logo.jpg";
*/

//Socials
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

//Stages
import {
  FaCircleNotch,
  FaEdit,
  FaCheckSquare,
  FaFolderOpen,
} from "react-icons/fa";

export default {
  social_media: [
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/dev-intj",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/dev_intj/",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/christos-dematas-a50452169/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/dev_intj",
    },
  ],

  //Stages
  stages: [
    {
      icon: <FaCircleNotch />,
      description: "Unfinished - Post Poned",
    },
    {
      icon: <FaEdit />,
      description: "Working on it",
    },
    {
      icon: <FaCheckSquare />,
      description: "Finished",
    },
    {
      icon: <FaFolderOpen />,
      description: "Source Code Available",
    },
  ],
};
