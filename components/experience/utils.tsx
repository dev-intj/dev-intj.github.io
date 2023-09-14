export const Education = ({ education }: any) => {
  return (
    <div className="flex flex-col gap-2 border-b border-white py-4 body-font font-typold">
      <h3 className="font-bold">
        {education.title}
      </h3>
      <h3>
        {education.name} - {education.place}
      </h3>
      <h3>
        {education.startDate} to{" "}
        {education.endDate}
      </h3>
    </div>
  );
};

export const Experience = ({
  experience,
}: any) => {
  return (
    <div className="flex flex-col gap-2 border-b border-white py-4 body-font font-typold">
      <h3 className="font-bold">
        {experience.title}
      </h3>
      <h3>
        {experience.company} - {experience.place}
      </h3>
      <h3>
        {experience.startDate} to{" "}
        {experience.endDate}
      </h3>
      {/* <h3>{experience.summary}</h3> */}
      <ul>
        {experience.points.map(
          (point: any, index: any) => (
            <li className="py-1" key={index}>
              &#9679; {point.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
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
