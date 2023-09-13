"use client";

import ReactCurvedText from "react-curved-text";

const CircleTextPanning = ({
  title,
  textColor,
  extraMainClasses,
}: any) => {
  return (
    <div
      className={`absolute ${extraMainClasses}`}
    >
      <ReactCurvedText
        width={200}
        height={200}
        cx="100"
        cy="100"
        rx={200/3}
        ry={200/3}
        startOffset={0}
        reversed={true}
        text={title}
        textProps={{
          style: {
            fontSize: "24",
          },
        }}
        textPathProps={{
          fill: textColor,
          strokeWidth: 0,
        }}
        svgProps={{
          className: "rotating-curved-text",
        }}
      />
    </div>
  );
};

export default CircleTextPanning;
