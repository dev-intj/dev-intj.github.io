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

export const Skillset = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center border-b-2 w-fit m-auto">
        <h1 className="my-2 text-xl body-font font-typold">
          Skillset
        </h1>
      </div>
      <Border
        customClassName={
          "flex flex-row items-center gap-8"
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
  );
};
