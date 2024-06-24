const AboutMeSection = () => {
  return (
    <div>
      <h1>Summary</h1>

      <p className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 flex flex-col gap-4">
        <span>
          My name is Christos. I'm a Front End
          Software Engineer with ReactJS expertise
          based in Greece, but willing to relocate{" "}
          {`;)`}
        </span>
        <span>
          Ever since my first snippet of code,
          I've always had a special interest in
          software development. I wanna expand my
          knowledge by working in every kind of
          industry, wether it's an app or a
          website.
        </span>
        <span>
          Over the last 2.5+ years, I've had the
          opportunity to develop a handful of
          technically difficult projects. I
          expertise on React, but I also know and
          want to learn many more languages.
        </span>
      </p>

      <h1>Experience</h1>
      <div className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 flex flex-col gap-4">
        <span>
          Front End Software Engineer Quality &
          Reliability S.A. - Αθήνα November 2022
          to Present Quality & Reliability (QnR)
          dabbles mainly on hellenic goverment
          projects. teams.
        </span>

        <ul>
          <li>
            Collaboration for development of
            mainly Hellenic Government projects
            such as PPC, OAED, MFA.
          </li>
          <li>
            Optimized existing software codebase
            to eliminate unnecessary complexity
            and achieve increased efficiencies in
            debugging and maintenance.
          </li>
          <li>
            Development of android/ios apps for
            private sector clients.
          </li>
          <li>
            Aggregated software project knowledge
            and documentation for future
            development
          </li>
        </ul>

        <span>
          Full Stack Software Engineer Grapevine
          Digital SA - Αθήνα July 2021 to November
          2022 Grapevine Digital is a start-up
          SAAS company that got created after the
          integration of giaola and 11888.gr as a
          maintainer of the said project.
        </span>

        <ul>
          <li>
            Implemented decoupling of the existing
            project through the creation of a REST
            API and a comprehensive front-end
            redesign.
          </li>

          <li>
            Worked closely with the team to
            successfully develop the front-end of
            new projects.
          </li>
          <li>
            Maintained, debugged and developed new
            features for existing codebase.
          </li>
        </ul>
      </div>

      <h1>Education</h1>
      <div className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5 flex flex-col gap-4">
        <span>
          University in Technical Computer
          Applications Hellenic Open University -
          Απομακρυσμένη Εργασία August 2022 to
          Presen
        </span>
      </div>
    </div>
  );
};

export default AboutMeSection;
