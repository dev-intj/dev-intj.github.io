//Stages
import {
  FaCircleNotch,
  FaEdit,
  FaCheckSquare,
  FaFolderOpen,
} from "react-icons/fa";

//Project Thumbnails
import RuneRagnarok from "../assets/images/projects/runeragnarok.png";
import SixteenQuotes from "../assets/images/projects/sixteenquotes.png";
import NetflixQDes from "../assets/images/projects/netflix.png";
import Wallpapers from "../assets/images/projects/wallpapers.png";

let projectsData = [
  {
    site: "https://dev-intj.github.io/sixteenquotes/",
    class: "",
    img: SixteenQuotes,
    alt: "sixteen quotes thumbnail",
    title: "Sixteen Quotes - UE4 & Web Site",
    description: "Web Development | Hobby Project (RUBY/JEKYLL/UE4)",
    stage: <FaCircleNotch />,
    source_site: "https://github.com/dev-intj/sixteenquotes",
    source: true,
    blog: false,
    blogroute: "",
  },
  {
    site: "https://runeragnarok-fed2b.web.app",
    class: "ragnarok",
    img: RuneRagnarok,
    alt: "rune ragnarok thumbnail",
    title: "Rune Ragnarok - Web Site",
    description: "UI/UX | Independent Contractor",
    stage: <FaCheckSquare />,
    source: false,
    blog: true,
    blogroute: "./projects/runeragnarok",
  },
  {
    site: "https://netflixqdes.web.app",
    class: "netflix",
    img: NetflixQDes,
    alt: "netflix quick design thumbnail",
    title: "NetflixQDev - Redux & React",
    description: "Web Development | Practice(Quick Development)",
    stage: <FaCircleNotch />,
    source_site: "https://github.com/dev-intj/netflixQdev",
    source: true,
    blog: false,
    blogroute: "",
  },
  {
    site: "https://dev-intj.github.io/wallpapers/",
    class: "wallpapers",
    img: Wallpapers,
    alt: "netflix quick design thumbnail",
    title: "Ruby Project",
    description: "Web Dev | Practice(RUBY/JEKYLL)",
    stage: <FaCheckSquare />,
    source_site: "https://github.com/dev-intj/wallpapers",
    source: true,
    blog: false,
    blogroute: "",
  },
];

export default projectsData
