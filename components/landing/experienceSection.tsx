import {
  Education,
  Experience,
  Skill,
} from "../experience/utils";

const educationDat: any[] = [
  {
    title:
      "University in Technical Computer Applications",
    name: "Hellenic Open University",
    place: "",
    startDate: "August 2022",
    endDate: "Present",
  },
  {
    title: "Technical Computer Applications",
    name: "D.I.E.K.",
    place: "",
    startDate: "",
    endDate: "",
  },
];

const experiencesDat: any[] = [
  {
    title: "Front End Software Engineer",
    company: "Quality & Reliability S.A.",
    location: "Athens",
    startDate: "November 2022",
    endDate: "Present",
    summary:
      "Quality & Reliability (QnR) dabbles mainly on hellenic goverment projects.",
    points: [
      {
        point:
          "Collaboration for development of mainly Hellenic Government projects such as PPC, OAED, MFA.",
      },
      {
        point:
          "Optimized existing software codebase to eliminate unnecessary complexity and achieve increase efficiencies in debugging and maintenance.",
      },
      {
        point:
          "Development of android/ios apps for private sector clients.",
      },
      {
        point:
          "Aggregated software project knowledge and documentation for future development teams.",
      },
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Grapevine Digital S.A.",
    location: "Athens",
    startDate: "July 2021",
    endDate: "November 2022",
    summary:
      "Grapevine Digital is a start-up SAAS company that got created after the integration of giaola and 11888.gr as a maintainer of the said project.",
    points: [
      {
        point:
          "Implemented decoupling of the existing project through the creation of a REST API and a comprehensive front-end redesign.",
      },
      {
        point:
          "Worked closely with the team to successfully develop the front-end of new projects.",
      },
      {
        point:
          "Development of android/ios apps for private sector clients.",
      },
      {
        point:
          "Maintained, debugged and developed new features for existing codebase.",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="flex flex-row items-center justify-center h-full text-black">
        <div className="flex flex-col h-[80%] w-[30%]">
          <div className="h-full bg-[#85989B] p-8">
            <h1 className="my-2 text-center text-2xl">
              Education
            </h1>
            <hr />
            <div className="flex flex-col gap-4 mt-8">
              {educationDat.map(
                (education, index) => (
                  <Education
                    education={education}
                    key={index}
                  />
                )
              )}
            </div>
          </div>
          <div className="h-[50%] p-8">
            <h1>Unknown</h1>
            <div className="flex flex-wrap flex-row gap-8 pt-4 hidden">
              <div>
                <Skill name={"React"} />
                <Skill name={"React-Native"} />
                <Skill name={"Vue"} />
              </div>
              <div>
                <Skill name={"React"} />
                <Skill name={"React-Native"} />
                <Skill name={"Vue"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col -ml-4 h-full w-[30%] pt-56 text-black">
          <div className="h-[80%] shadow-2xl">
            <div className="h-full bg-[#DCDBD9] p-8">
              <h1 className="my-2 text-center text-2xl">
                EXPERIENCE
              </h1>
              <hr />
              <div className="flex flex-col gap-4 mt-8">
                {experiencesDat.map(
                  (experience, index) => (
                    <Experience
                      experience={experience}
                      key={index}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-scroll hidden md:block" />
    </div>
  );
};

export default ExperienceSection;
