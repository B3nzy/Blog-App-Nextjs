"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function PostCard() {
  const [hovered, setHovered] = useState(false);
  const imageUrl =
    "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const blogTitle = "10 inspiring photos";
  const blogDescription =
    "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.";
  return (
    <div
      className={`${
        hovered ? "sm:scale-105" : ""
      } w-[450px] h-[450px] transition-all duration-500 bg-auto bg-no-repeat bg-center flex flex-col gap-4 justify-center items-center`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      {/* background will be a bit blackish on hover effect */}
      <div
        className={`
      ${
        hovered ? "sm:opacity-50 opacity-0" : "opacity-0"
      } transition-all duration-300
      absolute w-[450px] h-[450px] bg-black `}
      ></div>
      {/* <h1
        className={`${
          hovered ? "-translate-y-2" : "translate-y-20"
        } transition-all duration-500 text-slate-200 text-2xl font-semibold`}
      >
        {blogTitle}
      </h1>
      <div
        className={`${
          hovered ? "w-56 -translate-y-2" : "w-10 translate-y-20"
        } rounded-lg bg-yellow-700 h-[2px] transition-all duration-500`}
      ></div>
      <h1
        className={`${
          hovered ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-20"
        } transition-all duration-500 text-center p-5`}
      >
        {blogDescription}
      </h1> */}

      <h1
        className={`${
          hovered ? "sm:-translate-y-2" : "sm:translate-y-20"
        } transition-all duration-500  text-slate-200 text-2xl font-semibold`}
      >
        {blogTitle}
      </h1>
      <div
        className={`${
          hovered ? "w-56 sm:-translate-y-2" : "w-10 sm:translate-y-20"
        } rounded-lg bg-yellow-700 h-[2px] transition-all duration-500`}
      ></div>
      <h1
        className={`${
          hovered
            ? "sm:opacity-100 sm:-translate-y-2"
            : "sm:opacity-0 sm:translate-y-20"
        } transition-all duration-500 text-center p-5`}
      >
        {blogDescription}
      </h1>
    </div>
  );
}
