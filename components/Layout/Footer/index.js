import React from "react";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="https://github.com/dev-intj">
          <span className="underline underline-offset-1">
            Christos
          </span>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
