import React from "react";
import Links from "./links/Links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="z-20 flex flex-row justify-between h-16 backdrop-blur-md shadow-2xl w-full pl-5 pr-5 items-center ">
      <Link className="lg:pl-20" href={"/"}>
        TensorBlog
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
