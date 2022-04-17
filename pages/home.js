import React from "react";
import { Carousel } from "../components/carousel";
import {
  FaCircleNotch,
  FaEdit,
  FaCheckSquare,
  FaFolderOpen,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-4 h-full">
      {/* eslint spaced-comment: ["error", "always"] */}
      <div className="p-12 text-white">
        <h1 className="text-center">EXPLANATION OF THE SYMBOLS:</h1>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <div className="flex flex-row gap-1">
            <FaCircleNotch className="w-4 h-4 my-auto" /> Unfinished - Post
            Poned
          </div>
          <div className="flex flex-row gap-1">
            <FaEdit className="w-4 h-4 my-auto" /> Working on it
          </div>
          <div className="flex flex-row gap-1">
            <FaCheckSquare className="w-4 h-4 my-auto" /> Finished
          </div>
          <div className="flex flex-row gap-1">
            <FaFolderOpen className="w-4 h-4 my-auto" /> Source Code Available
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};
export default HomePage;
