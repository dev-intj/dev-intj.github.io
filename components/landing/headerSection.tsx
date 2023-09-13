import CircleTextPanning from "../utils/circleTextPanning";

const HeaderSection = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="relative flex justify-center items-center h-full">
        <div className="text-left relative">
          <div className="relative h-full">
            <CircleTextPanning
              title="FRONT-END:[REACT,VUE]"
              extraMainClasses="absolute top-[-8rem] left-[-7rem] mix-blend-difference body-font font-moki tracking-wider"
              textColor="white"
            />
            <h1
              className="text-[18rem] body-font font-moki leading-none"
              style={{
                lineHeight: 0.86,
                paddingLeft: 0,
                marginLeft: "-2rem",
              }}
            >
              PORT
            </h1>
          </div>

          <h1
            className="text-[20rem] body-font font-asher leading-none tracking-widest"
            style={{
              paddingLeft: 0,
              marginLeft: "-1rem",
            }}
          >
            FOLIO
          </h1>
          <h3
            className="body-font font-moki pt-5 sm-text-[6rem] text-[4.5rem] leading-none gap-4 flex"
            style={{
              paddingLeft: 0,
              marginLeft: "-2rem",
            }}
          >
            FRONT END ENGINEER
          </h3>
        </div>
      </div>

      <div className="icon-scroll" />
    </div>
  );
};

export default HeaderSection;
