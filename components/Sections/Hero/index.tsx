import { useRef } from "react";

import gsap, { Power3 } from "gsap";

import { useIsomorphicLayoutEffect } from "../../../utils";

import Socials from "../../Layout/Socials";
import Cat from "@/components/Cat";

export const stagger = (
  target: any,
  fromvVars: any,
  toVars: any
) => {
  return gsap.fromTo(
    target,
    { opacity: 0, ...fromvVars },
    {
      opacity: 1,
      ...toVars,
      stagger: 0.2,
      ease: Power3.easeOut,
    }
  );
};

const Hero = () => {
  const textOne = useRef<any>(null);
  const textTwo = useRef<any>(null);
  const textThree = useRef<any>(null);
  const textFour = useRef<any>(null);
  const textFive = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        textOne.current,
        textTwo.current,
        textThree.current,
        textFour.current,
        textFive.current,
      ],
      {
        y: 40,
        x: -10,
        transform: "scale(0.95) skew(10deg)",
      },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className="laptop:mt-20 mt-10 h-[70vh] laptop:h-screen flex flex-col">
      <div className="mt-5">
        <h1
          ref={textOne}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5"
        >
          Hello 👋
        </h1>
        <h1
          ref={textTwo}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full laptop:w-4/5"
        >
          I'm Christos,
        </h1>
        <h1
          ref={textThree}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full laptop:w-4/5"
        >
          A Front-End Engineer
        </h1>
        <h1
          ref={textFour}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full laptop:w-4/5"
        >
          based in Athens, Greece.
        </h1>
      </div>

      <Socials className="mt-2 laptop:mt-5" />

      <div className="flex flex-row h-full laptop:h-auto">
        <div className="w-full mt-auto mb-4">
          <h1
            className="text-2xl laptop:text-6xl up-down leading-relaxed laptop:leading-relaxed"
            ref={textFive}
          >
            Check my projects &<br />
            Assignments 👇
          </h1>
        </div>
        <div className="w-full hidden laptop:block">
          <Cat />
        </div>
      </div>
    </div>
  );
};

export default Hero;
