import { useEffect, useState } from "react";
import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  animate,
} from "framer-motion";
import useMeasure from "react-use-measure";

const Card = ({ image, height, width }: any) => {
  const [showOverlay, setShowOverlay] =
    useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${height} ${width}
    rounded-xl flex justify-center items-center`}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 
          rounded-full flex items-center gap-[1rem] hover:opacity-75 text-black"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image src={image} alt={image} fill />
    </motion.div>
  );
};

const InfiniteScrollingShowCase = () => {
  let [ref, { height }] = useMeasure();

  const defaultDuration = 25;
  const hoverDuraton = 75;

  const [duration, setDuration] = useState(
    defaultDuration
  );

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] =
    useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -height / 2 - 8;

    if (mustFinish) {
      controls = animate(
        xTranslation,
        [xTranslation.get(), finalPosition],
        {
          ease: "linear",
          duration:
            duration *
            (1 -
              xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          },
        }
      );
    } else {
      controls = animate(
        xTranslation,
        [0, finalPosition],
        {
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }
      );
    }

    return controls.stop;
  }, [xTranslation, height, duration, rerender]);

  const Row = () => {
    return (
      <>
        <Card
          image={
            "/img/SkroutzShowCase/productDisplay.png"
          }
          width={"w-[20rem]"}
          height={"h-[40rem]"}
        />
        <Card
          image={
            "/img/SkroutzShowCase/productDisplay.png"
          }
          width={"w-[20rem]"}
          height={"h-[40rem]"}
        />
      </>
    );
  };

  return (
    <motion.div
      className="absolute right-0 flex flex-col gap-4 w-full"
      ref={ref}
      style={{ y: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(hoverDuraton);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(defaultDuration);
      }}
    >
      <Row />
      <Row />
    </motion.div>
  );
};

const SkroutzProjectShowCase = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col gap-8 w-full p-16">
        <Image
          src="/img/SkroutzShowCase/logo.svg"
          width={350}
          height={350}
          alt="Skroutz Logo"
        />
        <p className="text-2xl text-black">
          Started this project as a case study on
          <br />
          multiple reusable components folder
          structure.
        </p>
        <a className="text-red-500 text-xl line-through">
          Case Study
        </a>
        <a
          href="https://github.com/dev-intj/skroutz-in-react"
          className="text-[#f68b24] text-xl font-semibold"
        >
          Github Repo
        </a>
        <a
          href="https://dev-intj.github.io/skroutz-in-react/"
          className="text-[#f68b24] text-xl font-semibold"
        >
          Live Demo
        </a>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="relative w-full h-full flex flex-row mx-2">
          <InfiniteScrollingShowCase />
        </div>
        <div
          className="relative w-full h-full flex flex-row mx-2"
          style={{
            paddingTop: "20rem",
          }}
        >
          <InfiniteScrollingShowCase />
        </div>
      </div>
    </div>
  );
};

export default SkroutzProjectShowCase;
