import CircleTextPanning from "../utils/circleTextPanning";

const HeaderSection = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="relative flex justify-center items-center h-full p-8 md:p-0">
        <div className="text-left relative">
          <div className="relative h-full">
            <CircleTextPanning
              title="FRONT-END:[REACT,VUE]"
              extraMainClasses="absolute top-[-125%] left-[-30%] md:top-[-50%] md:left-[-15%] mix-blend-difference body-font font-moki tracking-wider"
              textColor="white"
            />
            <h1
              className="text-[4rem] md:text-[18rem] body-font font-moki leading-none pl-0 ml-0 md:-ml-[2rem] text-left"
              style={{
                lineHeight: 0.86,
              }}
            >
              PORT
            </h1>
          </div>

          <h1 className="text-[5rem] md:text-[20rem] body-font font-asher leading-none tracking-widest pl-0 ml-0 md:-ml-[1rem] text-left">
            FOLIO
          </h1>
          <h3 className="text-[2rem] md:text-[6rem] body-font font-moki pt-5 leading-none gap-4 flex pl-0 ml-0 md:-ml-[2rem] text-left">
            FRONT END <br /> ENGINEER
          </h3>
        </div>
      </div>

      <div className="icon-scroll hidden md:block" />
    </div>
  );
};

export default HeaderSection;
