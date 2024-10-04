import React from "react";
import Links from "./links/Links";

export default function Navbar() {
  return (
    <div className="z-20 flex flex-row justify-between h-16 backdrop-blur-md shadow-2xl w-full pl-5 pr-5 items-center ">
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
