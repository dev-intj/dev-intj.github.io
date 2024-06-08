import { Project } from "../projects/utils";

// custom projects
import SkroutzProjectShowCase from "../projects/skroutz";

const projects = [
  {
    header: "some project",
    bgColor: "bg-[#100d0e]",
    waveColor: "bg-[#DCDBD9]",
  },
  {
    customComp: true,
    bgColor: "bg-[#100d0e]",
    waveColor: "bg-[#DCDBD9]",
    comp: SkroutzProjectShowCase,
  },
  {
    header: "some project",
    bgColor: "bg-[#DCDBD9]",
    waveColor: "bg-[#100d0e]",
  },
];

const ProjectsSection = () => {
  return projects?.map((item, index) => (
    <Project
      item={item}
      key={index}
      Component={item?.comp}
    />
  ));
};

export default ProjectsSection;
