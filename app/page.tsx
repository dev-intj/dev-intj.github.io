"use client";
import HeaderSection from "@/components/landing/headerSection";
import SummarySection from "@/components/landing/summarySection";
import ExperienceSection from "@/components/landing/experienceSection";
import PoliceTapeSection from "@/components/landing/policeTape";
import ProjectsSection from "@/components/landing/projectsSection";

import ReactFullpage from "@fullpage/react-fullpage";

const Fullpage = () => {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      parallax={false}
      navigation={true}
      credits={{ enabled: false }}
      responsiveWidth={768}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <HeaderSection />
            </div>
            <div className="section">
              <SummarySection />
            </div>
            <div className="section">
              <ExperienceSection />
            </div>
            <div className="section">
              <PoliceTapeSection />
            </div>
            <ProjectsSection />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default function Home() {
  return <Fullpage />;
}
