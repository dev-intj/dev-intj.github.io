export const Education = ({ education }: any) => {
  return <div>{education.title}</div>;
};

export const Experience = ({
  experience,
}: any) => {
  return <div>{experience.title}</div>;
};

export const Skill = ({ name }: any) => {
  return (
    <div className="flex flex-row ">
      <div>star</div>
      <div>image</div>
      <div>{name}</div>
    </div>
  );
};
