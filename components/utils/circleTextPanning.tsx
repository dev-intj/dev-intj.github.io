"use client";

import { useMemo } from "react";
import ReactCurvedText from "react-curved-text";

const CircleTextPanning = ({
  title,
  textColor,
  extraMainClasses,
}: any) => {
  const num = useMemo(() => {
    if (
      typeof window !== "undefined" &&
      window?.innerWidth < 960
    ) {
      return 100;
    }
    return 200;
  }, [window]);

  return (
    <div
      className={`absolute ${extraMainClasses} ml-5`}
    >
      <ReactCurvedText
        width={num}
        height={num}
        cx={num / 2}
        cy={num / 2}
        rx={num / 3}
        ry={num / 3}
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
