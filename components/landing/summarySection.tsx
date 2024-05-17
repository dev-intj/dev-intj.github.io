import Image from "next/image";
import { SocialMedias } from "../Summary/socialMedia";
import { Skillset } from "../Summary/skillset";
import { Summary } from "../Summary/summary";

const Border = ({
  customClassName,
  children,
}: any) => {
  return (
    <div
      className={`p-4 rounded-lg ${customClassName}`}
    >
      {children}
    </div>
  );
};

const SummarySection = () => {
  return (
    <div className="flex flex-col gap-18 h-full">
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <div className="flex flex-col gap-8">
          <Border
            customClassName={"h-full w-full"}
          >
            <Image
              src="/img/cat2.png"
              className="block md:hidden rounded-full border-white border-2 m-auto"
              width={125}
              height={125}
              alt="Picture of the author"
            />
            <Image
              src="/img/cat2.png"
              className="hidden md:block rounded-full border-white border-2 m-auto"
              width={250}
              height={250}
              alt="Picture of the author"
            />
          </Border>
          <Skillset />
        </div>
        <div className="w-full md:w-[25%] mt-8">
          <Summary />
        </div>
      </div>
      <SocialMedias />
    </div>
  );
};

export default SummarySection;
