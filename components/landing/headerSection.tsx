import CircleTextPanning from "../utils/circleTextPanning";

const HeaderSection = () => {
  return (
    <>
      <div className="relative flex justify-center items-center h-full p-8 lg:p-0 m-auto">
        <div className="text-left relative">
          <div className="relative h-full">
            <CircleTextPanning
              title="FRONT-END:[REACT,VUE]"
              extraMainClasses="absolute top-[-125%] left-[-30%] lg:top-[-50%] lg:left-[-15%] mix-blend-difference body-font font-moki tracking-wider"
              textColor="white"
            />
            <h1
              className="text-[4rem] md:text-[12rem] lg:text-[18rem] body-font font-moki leading-none pl-0 ml-0 lg:-ml-[2rem] text-left"
              style={{
                lineHeight: 0.86,
              }}
            >
              PORT
            </h1>
          </div>

          <h1 className="text-[5rem] md:text-[14] lg:text-[20rem] body-font font-asher leading-none tracking-widest pl-0 ml-0 lg:-ml-[1rem] text-left">
            FOLIO
          </h1>
          <h3 className="text-[2rem] md:text-[4rem] lg:text-[6rem] body-font font-moki pt-5 leading-none gap-4 flex pl-0 ml-0 lg:-ml-[2rem] text-left">
            FRONT END <br /> ENGINEER
          </h3>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
