import {
  Linkedin,
  Instagram,
  Email,
  Resume,
} from "../utils/icons";
import Image from "next/image";

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

function downloadFile() {
  var link = document.createElement("a");
  document.body.appendChild(link);
  link.href = "resume.pdf";
  link.download = "";
  link.click();
}

const SummarySection = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="flex justify-center h-full items-center pb-16 lg:mb-0">
        <div className="flex flex-col lg:grid grid-cols-8 grid-rows-7 gap-8 lg:gap-16">
          <div className="hidden md:block col-span-2 row-span-4 col-start-3">
            <Border
              customClassName={"h-full w-full"}
            >
              <Image
                src="/img/cat2.png"
                className="rounded-full border-white border-2 m-auto"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Border>
          </div>
          <div className="flex lg:block lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-2">
            <Border customClassName="">
              <h1 className="text-2xl body-font font-asher my-4">
                Hello World!!
              </h1>
              <h3 className="body-font font-typold">
                My name is Christos. I'm a Front
                End Software Engineer with ReactJS
                expertise based in Greece, but
                willing to relocate ;)
              </h3>
            </Border>
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-4">
            <Border customClassName="lg:ml-8">
              <h3 className="body-font font-typold">
                Ever since my first snippet of
                code, I've always had a special
                interest in software development.
                I wanna expand my knowledge by
                working in every kind of industry,
                wether it's an app or a website.
              </h3>
            </Border>
          </div>
          <div className="col-span-2 row-span-2 col-start-5 row-start-6">
            <Border customClassName="lg:ml-16">
              <h3 className="body-font font-typold">
                Over the last 2.5+ years, I've had
                the opportunity to develop a
                handful of technically difficult
                projects. I expertise on React,
                but I also know and want to learn
                many more languages.
              </h3>
            </Border>
          </div>
          <div className="hidden lg:grid col-span-2 row-span-2 col-start-3 row-start-5 mt-4">
            <div className="text-center border-b-2 w-fit m-auto">
              <h1 className="my-2 text-xl body-font font-typold">
                Skillset
              </h1>
            </div>
            <Border
              customClassName={
                "h-full w-full flex flex-row gap-8 flex-wrap"
              }
            >
              <Image
                src="/img/react.svg"
                alt="react logo"
                width={50}
                height={50}
              />
              <Image
                src="/img/next.svg"
                alt="react logo"
                width={50}
                height={50}
              />
              <Image
                src="/img/vue.svg"
                alt="react logo"
                color={"white"}
                width={50}
                height={50}
              />
              <Image
                src="/img/ts.svg"
                alt="react logo"
                width={50}
                height={50}
              />
            </Border>
          </div>
          <div className="lg:col-span-8 lg:row-span-4">
            <div className="flex flex-row justify-center gap-24 lg:gap-72 h-full items-center flex-wrap">
              <button
                className="text-2xl"
                onClick={() =>
                  window.open(
                    "mailto:demataschristiano@gmail.com"
                  )
                }
              >
                <Email />
              </button>
              <button
                className="text-2xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/christos-dematas-a50452169/"
                  )
                }
              >
                <Linkedin />
              </button>
              <button
                className="text-2xl"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/dev_intj/"
                  )
                }
              >
                <Instagram />
              </button>
              <button
                className="text-2xl"
                onClick={() => downloadFile()}
              >
                <Resume />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-scroll hidden lg:block" />
    </div>
  );
};

export default SummarySection;
