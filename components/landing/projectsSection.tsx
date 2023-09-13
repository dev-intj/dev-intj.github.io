import { Project } from "../projects/utils";

const projects = [
  {
    header: "some project",
    bgColor: "bg-[#100d0e]",
    waveColor: "bg-[#DCDBD9]",
  },
  {
    header: "some project",
    bgColor: "bg-[#DCDBD9]",
    waveColor: "bg-[#100d0e]",
  },
];

const ProjectsSection = () => {
  return projects?.map((item, index) => (
    <Project item={item} key={index} />
  ));
};

export default ProjectsSection;
