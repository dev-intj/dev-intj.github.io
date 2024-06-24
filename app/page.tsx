"use client";

import { useRef } from "react";
import Head from "next/head";

// layout

import NavBar from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";
import Cursor from "../components/Layout/Cursor";

// sections
import Hero from "@/components/Sections/Hero";
import AboutMeSection from "@/components/Sections/AboutMe";
import WorkSection from "@/components/Sections/Work";
import AssignmentsSection from "@/components/Sections/Assignments";

export default function Home() {
  // Ref
  const workRef = useRef<HTMLDivElement | null>(
    null
  );
  const aboutRef = useRef<HTMLDivElement | null>(
    null
  );
  const assignmentsRef =
    useRef<HTMLDivElement | null>(null);

  // handle scroll
  const handleScroll = (refNum: number) => {
    const refArray = [
      workRef,
      assignmentsRef,
      aboutRef,
    ];

    const ref = refArray[refNum];

    if (
      ref != undefined &&
      ref.current != undefined
    )
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
  };

  return (
    <div className="relative cursor-none">
      <Cursor />
      <Head>
        <title>Christos D</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <NavBar handleScroll={handleScroll} />

        <Hero />

        <div ref={workRef} className="pt-24">
          <h1>Projects</h1>
          <WorkSection />
        </div>

        <div
          ref={assignmentsRef}
          className="pt-24"
        >
          <h1>
            Technical assignments from various
            companies
          </h1>
          <AssignmentsSection />
        </div>

        {/* <div ref={aboutRef} className="pt-24">
          <h1>About me</h1>
          <AboutMeSection />
        </div> */}
      </div>

      <div className="container mx-auto mb-10">
        <Footer />
      </div>
    </div>
  );
}
