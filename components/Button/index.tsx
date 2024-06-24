import React from "react";

const Button = ({
  children,
  onClick,
  classes,
}: any) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base rounded-lg flex items-center transition-all ease-out duration-100 hover:bg-gray-300 hover:bg-opacity-60 hover:text-black dark:hover:bg-white hover:scale-105 active:scale-100 tablet:first:ml-0 cursor-none ${classes} link dark:fill-white`}
    >
      {children}
    </button>
  );
};

export default Button;
