import Image from "next/image";

const WorkCard = ({
  href,
  imgSrc,
  imgAlt,
  title,
  subTitle,
  tags,
  sourceCode,
}: any) => {
  return (
    <a
      href={href}
      target="_blank"
      className="py-5 my-2 gap-2 flex flex-col items-start rounded-3xl cursor-pointer text-left text-white"
    >
      <div className="w-full h-full rounded-2xl relative">
        <Image
          src={imgSrc}
          sizes="100vw"
          alt={imgSrc || imgAlt}
          className="rounded-2xl bg-white overflow-hidden shadow-xl"
          width={938}
          height={527}
        />
      </div>
      <div>
        <h3 className="text-2xl mt-4 font-medium text-black dark:text-white">
          {title}
        </h3>
        <p className="mt-2 opacity-50 text-md text-black dark:text-white">
          {subTitle}
        </p>
        {/* quick way to have uniformity between work cards & dirty but I don't need to write weird flex code */}
        <div
          className={`mt-2 opacity-50 text-md text-black dark:text-white ${
            sourceCode && "hover:underline"
          } `}
          onClick={() =>
            sourceCode && window.open(sourceCode)
          }
        >
          {sourceCode
            ? "Source Code"
            : "\u00a0\u00a0"}
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
