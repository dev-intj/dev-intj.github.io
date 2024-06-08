export const Project = ({
  item,
  Component,
}: any) => {
  return (
    <>
      <div
        className={`w-screen h-screen overflow-hidden relative ${item.waveColor}`}
      >
        {item?.customComp === true ? (
          <Component />
        ) : (
          <>
            {item.header}
            <div
              className={`homeanimbg ${item.bgColor}`}
            ></div>
          </>
        )}
      </div>
    </>
  );
};
