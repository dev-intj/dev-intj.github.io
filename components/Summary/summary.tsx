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

export const Summary = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Border customClassName="">
          <h1 className="text-2xl body-font font-asher my-4">
            Hello World!!
          </h1>
          <h3 className="body-font font-typold">
            My name is Christos. I'm a Front End
            Software Engineer with ReactJS
            expertise based in Greece, but willing
            to relocate ;)
          </h3>
        </Border>
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-4">
        <Border customClassName="lg:ml-8">
          <h3 className="body-font font-typold">
            Ever since my first snippet of code,
            I've always had a special interest in
            software development. I wanna expand
            my knowledge by working in every kind
            of industry, wether it's an app or a
            website.
          </h3>
        </Border>
      </div>
      <div className="col-span-2 row-span-2 col-start-5 row-start-6">
        <Border customClassName="lg:ml-16">
          <h3 className="body-font font-typold">
            Over the last 2.5+ years, I've had the
            opportunity to develop a handful of
            technically difficult projects. I
            expertise on React, but I also know
            and want to learn many more languages.
          </h3>
        </Border>
      </div>
    </div>
  );
};
