const PoliceTape = ({ d, y }: any) => {
  const style = {
    "--d": d,
    "--y": y,
  } as React.CSSProperties;

  const phrase = `Projects section do not cross - Projects section do not cross - Projects section do not cross `;

  return (
    <div
      className="tape-scroll pointer-events-none"
      style={style}
    >
      <div>
        <span>{phrase}</span>
      </div>
      <div>
        <span>{phrase}</span>
      </div>
    </div>
  );
};

const PoliceTapeSection = () => {
  const y = 100;
  const d = 45;

  return (
    <section className="projects-tape relative">
      <PoliceTape d={d} y={-100} />
      <PoliceTape d={d} y={0} />
      <PoliceTape d={d} y={y * 1} />
      <PoliceTape d={d} y={y * 2} />
      <PoliceTape d={d} y={y * 3} />
      <PoliceTape d={d} y={y * 4} />
      <PoliceTape d={d} y={y * 5} />
      <PoliceTape d={d} y={y * 6} />
      <PoliceTape d={d} y={y * 7} />
      <PoliceTape d={d} y={y * 8} />
      <PoliceTape d={d} y={y * 9} />
      <PoliceTape d={d} y={y * 10} />

      <div className="absolute bg-white p-12 md:p-8 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="text-4xl body-font font-typold text-black">
          Project Section
        </h1>
        <br />
        <h4 className="text-2xl body-font font-typold text-black">
          will add things after some time
        </h4>
        <h4 className="text-2xl body-font font-typold text-black">
          I just revamped my portfolio 14/9/2023
        </h4>
        <h4 className="text-xl body-font font-typold text-black">
          (it still needs work)
        </h4>
      </div>

      {/* <div className="icon-scroll" /> */}
    </section>
  );
};

export default PoliceTapeSection;
