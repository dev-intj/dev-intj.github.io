import {
  Education,
  Experience,
  Skill,
} from "../experience/utils";

{
  /* <div className="hidden h-[50%] p-8">
  <h1>Unknown</h1>
  <div className="hidden 2xl:flex flex-wrap flex-row gap-8 pt-4">
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
</div>; */
}

const educationDat: any[] = [
  {
    title:
      "University in Technical Computer Applications",
    name: "Hellenic Open University",
    place: "Athens",
    startDate: "August 2022",
    endDate: "Present",
  },
  {
    title: "Technical Computer Applications",
    name: "D.I.E.K.",
    place: "Volos",
    startDate: "Sep 2017",
    endDate: "Jun 2019",
  },
];

const experiencesDat: any[] = [
  {
    title: "Front End Software Engineer",
    company: "Quality & Reliability S.A.",
    place: "Athens",
    startDate: "November 2022",
    endDate: "Present",
    summary:
      "Quality & Reliability (QnR) dabbles mainly on hellenic goverment projects.",
    points: [
      {
        title:
          "Collaboration for development of mainly Hellenic Government projects such as PPC, OAED, MFA.",
      },
      {
        title:
          "Optimized existing software codebase to eliminate unnecessary complexity and achieve increase efficiencies in debugging and maintenance.",
      },
      {
        title:
          "Development of android/ios apps for private sector clients.",
      },
      {
        title:
          "Aggregated software project knowledge and documentation for future development teams.",
      },
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Grapevine Digital S.A.",
    place: "Athens",
    startDate: "July 2021",
    endDate: "November 2022",
    summary:
      "Grapevine Digital is a start-up SAAS company that got created after the integration of giaola and 11888.gr as a maintainer of the said project.",
    points: [
      {
        title:
          "Implemented decoupling of the existing project through the creation of a REST API and a comprehensive front-end redesign.",
      },
      {
        title:
          "Worked closely with the team to successfully develop the front-end of new projects.",
      },
      {
        title:
          "Development of android/ios apps for private sector clients.",
      },
      {
        title:
          "Maintained, debugged and developed new features for existing codebase.",
      },
    ],
  },
];

const EducationComp = () => {
  return (
    <div className="flex flex-col h-full md:h-[95%] md:w-[45%] 2xl:h-[80%] 2xl:w-[30%]">
      <div className="h-full bg-[#85989B] p-8">
        <h1 className="py-2 md:py-6 text-center text-2xl border-b border-white font-bold">
          EDUCATION
        </h1>
        <div className="flex flex-col gap-4 pt-8">
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
    </div>
  );
};

const ExperienceComp = () => {
  return (
    <div className="flex flex-col h-full md:h-[95%] sm:w-[60%] lg:w-[30%] lg:-ml-4 lg:pt-24 text-black">
      <div className="h-full shadow-2xl">
        <div className="h-full bg-[#DCDBD9] p-8">
          <h1 className="my-2 text-center text-2xl border-b border-white py-4 font-bold">
            EXPERIENCE
          </h1>
          <div className="flex flex-row 2xl:flex-col gap-4 mt-8">
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
  );
};

const ExperienceCompMobi = () => {
  const classNames =
    "flex flex-col h-full md:h-[80%] sm:w-[60%] 2xl:h-[80%] 2xl:w-[30%] 2xl:-ml-4 2xl:pt-56 text-black";

  // <div className="h-full">
  //   <div className="h-full 2xl:h-[90%] shadow-2xl">

  <div className="slide">
    <div className="w-screen h-screen relative"></div>
  </div>;

  return experiencesDat.map(
    (experience, index) => (
      <div className="slide">
        <div className="w-screen h-screen relative">
          <div className="h-full bg-[#DCDBD9] p-16 lg:p-8 text-black pb-24">
            <h1 className="py-2 md:py-6 text-center text-2xl border-b border-white font-bold">
              EXPERIENCE
            </h1>
            <div className="flex flex-col gap-4 pt-8">
              <Experience
                experience={experience}
                key={index}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const ExperienceSection = () => {
  return (
    <>
      <div className="block md:hidden">
        <div className="slide">
          <div className="w-screen h-screen relative">
            <EducationComp />
          </div>
        </div>
        <ExperienceCompMobi />
      </div>
      <div className="hidden md:block">
        <div className="w-screen h-screen relative">
          <div className="h-full w-full relative">
            <div className="flex flex-row items-center justify-center h-full text-black">
              <EducationComp />
              <ExperienceComp />
            </div>
            <div className="icon-scroll hidden lg:block" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
