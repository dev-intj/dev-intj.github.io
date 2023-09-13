const styles: any = {
  circle: {
    position: "relative",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
};

const CircleTextPanningWithoutPack = ({
  title,
  textColor,
  zIndex,
}: any) => {
  return (
    <div style={styles.circle}>
      <div style={styles.text}>
        <p>
          {title
            ?.split("")
            .map((t: string, i: number) => (
              <span
                key={i}
                style={{
                  transform: `rotate(${
                    i * (10.5 * 2)
                  }deg)`,
                  position: "absolute",
                  left: "50%",
                  fontSize: "2.4em",
                  transformOrigin: "0 100px",
                  color: textColor,
                }}
              >
                {t}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default CircleTextPanningWithoutPack;
