//Importing Icons and Images


//Skills
import backendIcon from "./images/skills/back-end.svg";
import frontendIcon from "./images/skills/front-end.svg";
import uiuxdesIcon from "./images/skills/uiux-des.svg";

//Socials
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

//Stages
import { FaCircleNotch, FaEdit, FaCheckSquare, FaFolderOpen } from "react-icons/fa";

//Project Thumbnails
import RuneRagnarok from "./images/projects/runeragnarok.png";
import SixteenQuotes from "./images/projects/sixteenquotes.png";
import NetflixQDes from "./images/projects/netflix.png";
import Dorito from "./images/projects/dorito.png";
import Wallpapers from "./images/projects/wallpapers.png";


//Past companies
import EdgeOfReality from "./images/past-companies/edge-of-reality-logo.png";
import HumanHeadStudios from "./images/past-companies/Humanheadlogo.png";
import SoakCom from "./images/past-companies/soak-logo.jpg";

//importing geometry 810
import Square from "./images/810/square_810.svg";
/* 
//import things I need
import Layout from './components/layout';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
*/

export default {

    //Change the website template

    //Header Details
    header: {
        header_title: "Web Designer & Web Developer",
        header_subtitle: "I like clean code and beautifully designed things.",
        header_footer_title: "Hi, I’m Christos.",
        header_footer_subtitle: "A Goal-oriented, extremely persistent person enthusiastic in building enriching user-centric experiences.",
    },
    //Skills Section
    skills: [
        {
            title: "Back-end Developer",
            img: backendIcon,
            alt: "back end developer",
            para: "I like to code things from scratch, and enjoy turning a complex design to a interactive experience.",
            subtitle: "Languages I speak:",
            tags: "PHP, Python, Javascript,jQuery.",
        },
        {
            title: "Front-end Developer",
            img: frontendIcon,
            alt: "front end developer",
            para: "I value simple content structure, clean design patterns, thoughtful interactions and current trends.",
            subtitle: "Things I enjoy designing:",
            tags: "UX, UI, Web, Mobile, Apps.",
        },
        {
            title: "UI/UX Designer",
            img: uiuxdesIcon,
            alt: "ui/ux designer",
            para: "I understand how to catch the mind of a user and subtly force them to make a decision for me through a design.",
            subtitle: "Tools that I use:",
            tags: "Google Analytics.",
        },
    ],
    //End of Skills Section

    //Projects Page
    projects: [
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
            blogroute: ""
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
            blogroute: ""
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
            blogroute: ""
        }
    ],
    //End of Projects Page

    //About Page
    about_header: {
        title: "Hello World, I'm Christos.",
        subtitle: "A Web Developer from Greece. I've been coding & designing for over 4 years.",
        class: "white"
    },
    about1: [
        {
            paragraph: "My web development story started once I started learning programming in my high school. I was all pumped up, thinking that I’ve found something that I would love doing one day and 4 years later it's still my passion, well I mainly focus on Front-End Development but you get the point!",
            class: "is-primary"
        },
        {
            paragraph: "Throughout those 4 years, I’ve worked remotely for a number of clients and established companies. These have been located to mainly english speaking countries, from United Kingdom to United States.",
            class: "is-white"
        },
    ],
    about2: [
        {
            paragraph: "My main experience is in UI/UX but I love Front-End Development and Design. I have experience managing a project from initial consultation to launch, using analytics to read the behavior of the users and influence them through carefully pixel - perfect design elements.",
            class: "is-primary"
        },
        {
            paragraph: "Are you looking for a freelancer or are you looking to fill a position?<p></p>... I'm currently open",
            class: "is-white"
        },
    ],
    About_contact: {
        contact_paragraph: "I take great pride in having the ability to complete work to the high standard you expect But also go the extra mile. I enjoy getting to know my clients, their ideals and their goals And how I can best apply myself to make sure their website succeeds. I always like Analyzing metrics and making data - based decisions and Recommendations, resulting in higher rates of success.",
        contact_email: "mailto:demataschristiano@gmail.com",
    },

    //past companies section
    past_companies: [
        {
            img: EdgeOfReality,
            alt: "Edge of reality logo"
        },
        {
            img: HumanHeadStudios,
            alt: "Human Head Studios logo"
        },
        {
            img: SoakCom,
            alt: "Soak com logo"
        }
    ],
    //End of About Page



    social_media: [
        {
            name: "Github",
            icon: <FaGithub />,
            link: "https://github.com/dev-intj"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/dev_intj/"
        },
        {
            name: "Linkedin",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/christos-dematas-a50452169/"
        },
        {
            name: "Twitter",
            icon: <FaTwitter />,
            link: "https://twitter.com/dev_intj"
        }
    ],


    //Stages
    stages: [
        {
            icon: <FaCircleNotch />,
            description: "Unfinished - Post Poned"
        },
        {
            icon: <FaEdit />,
            description: "Working on it"
        },
        {
            icon: <FaCheckSquare />,
            description: "Finished"
        },
        {
            icon: <FaFolderOpen />,
            description: "Source Code Available"
        }
    ]



    //End of template
}

