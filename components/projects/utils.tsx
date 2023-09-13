export const Project = ({ item }: any) => {
  return (
    <div className="section">
      <div
        className={`w-screen h-screen overflow-hidden relative ${item.waveColor}`}
      >
        {item.header}
        <div
          className={`homeanimbg ${item.bgColor}`}
        ></div>
      </div>
    </div>
  );
};
