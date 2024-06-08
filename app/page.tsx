"use client";
import HeaderSection from "@/components/landing/headerSection";
import SummarySection from "@/components/landing/summarySection";
import ExperienceSection from "@/components/landing/experienceSection";
import PoliceTapeSection from "@/components/landing/policeTape";
import ProjectsSection from "@/components/landing/projectsSection";

const PageWrapper = ({
  extraClasses = "",
  children,
}: any) => {
  return (
    <div
      className={`w-screen h-screen relative ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <PageWrapper>
        <HeaderSection />
        <div className="icon-scroll hidden lg:block" />
      </PageWrapper>
      <PageWrapper>
        <SummarySection />
        <div className="icon-scroll hidden lg:block" />
      </PageWrapper>
      <PageWrapper extraClasses="hidden md:block">
        <ExperienceSection />
        <div className="icon-scroll hidden lg:block" />
      </PageWrapper>
      <ProjectsSection />
    </div>
  );
}
