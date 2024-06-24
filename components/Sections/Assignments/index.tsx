import WorkCard from "../../WorkCard";

const AssignmentsSection = ({ ref }: any) => {
  return (
    <div className="text-center flex flex-col">
      <div className="grid grid-cols-1 laptop:grid-cols-2 w-full laptop:gap-12">
        <WorkCard
          imgSrc={
            "/images/TechnicalAssignments/workable.png"
          }
          title="FullStack Software Engineer Assignment For Workable"
          subTitle="Created a website based on Figma using OpenWeather API for REST"
          sourceCode=""
        />

        <WorkCard
          href="https://dev-intj.github.io/s-front-end-assignment/"
          imgSrc={
            "/images/TechnicalAssignments/sleed1.png"
          }
          title="Front-End Software Engineer Assignment for Sleed #1"
          subTitle="Created a website based on Figma, that sends a contact form & saves previous form in local storage"
          sourceCode="https://github.com/dev-intj/s-front-end-assignment"
        />

        <WorkCard
          href="https://s-front-end-assignment-2-json-posts.vercel.app"
          imgSrc={
            "/images/TechnicalAssignments/sleed2.png"
          }
          title="Front-End Software Engineer Assignment for Sleed #2"
          subTitle="Created a website based on Figma using {JSON} Placeholder API for REST"
          sourceCode="https://github.com/dev-intj/s-front-end-assignment-2-json-posts"
        />
      </div>
    </div>
  );
};

export default AssignmentsSection;
