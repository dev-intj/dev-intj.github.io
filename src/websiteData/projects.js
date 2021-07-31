export default {
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
    ],

    // dedicated pages
    runeragnarok:
    {
        title: "Rune Ragnarok",
        description: "Building a visually striking website for Human Head studio's game with eye catching elements and content managament system whilst remaining fast to use across a wide range of devices",
        responsibilities: [
            "UI/UX", "CMS", "APIs", "Responsive CSS", "WordPress", "Performance Testing", "GitHub"
        ],
        updates: [
            { date: "28 Sep 2018", description: "Explanation of my position and work experience working for Human Head Studio." }
        ],
    }
}