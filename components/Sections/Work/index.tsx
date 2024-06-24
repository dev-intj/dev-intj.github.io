import WorkCard from "../../WorkCard";

const WorkSection = ({ ref }: any) => {
  return (
    <div className="text-center flex flex-col">
      <div className="grid grid-cols-1 laptop:grid-cols-2 w-full laptop:gap-12">
        <WorkCard
          href="https://dev-intj.github.io/skroutz-in-react/"
          imgSrc={"/images/Skroutz/showcase.png"}
          title="Skroutz in ReactJs"
          subTitle="Using Atomic design principles + reactJS to make skroutz"
          sourceCode="https://github.com/dev-intj/skroutz-in-react"
        />

        <WorkCard
          href="https://github.com/dev-intj/react-render-wave"
          imgSrc={
            "/images/RenderWave/showcase.png"
          }
          title="React Render Wave - A package for ReactJS"
          subTitle="A compact React hook that makes rendering large datasets effortless."
        />
      </div>
    </div>
  );
};

export default WorkSection;
