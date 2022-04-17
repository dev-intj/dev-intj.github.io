import React from "react";
import Slider from "react-slick";
import projectsData from "../websiteData/projects";
import { ProjectEntry } from "./elements/project-entry";

export const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="container-list-projects slider-parent">
      <Slider {...settings}>
        {projectsData.map((option, index) => (
          <div key={index}>
            <ProjectEntry data={option} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
