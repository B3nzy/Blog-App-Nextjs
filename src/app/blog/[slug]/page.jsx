"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { blogs } from "../data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SinglePostPage({ params }) {
  const blogId = parseInt(params.slug[0]);

  const blog = blogs.filter((blog) => {
    return blog.id === blogId;
  })[0];

  const blogMainDivShadowVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
  };

  return (
    <div className="w-[300px] md:w-[500px] lg:w-[700px] xl:w-[900px] m-auto h-screen flex flex-col gap-10 mt-10">
      <motion.div
        className="w-full h-96 bg-cover bg-no-repeat bg-center shadow-xl flex flex-col justify-end gap-2"
        style={{ backgroundImage: `url(${blog.imageUrl})` }}
        initial="initial"
        animate="initial"
        whileHover="animate"
      >
        {/* Shadow on hover */}
        <motion.div
          className="absolute w-[300px] md:w-[500px] lg:w-[700px] xl:w-[900px] h-96 bg-black"
          variants={blogMainDivShadowVariant}
        ></motion.div>
        {/* Blog Type */}
        <motion.div
          initial={{ x: "10vh", opacity: 0 }}
          animate={{ x: "0vh", opacity: 1 }}
          className="z-10 text-black bg-white pl-4 pr-4 p-1 text-sm ml-4 w-fit rounded"
        >
          {blog.type}
        </motion.div>
        {/* Blog Title */}
        <motion.div
          initial={{ x: "10vh", opacity: 0 }}
          animate={{ x: "0vh", opacity: 1 }}
          className="z-10 text-white text-2xl p-2 ml-2 "
        >
          {blog.blogTitle}
        </motion.div>
        {/* Blog Creation */}
        <motion.div
          initial={{ x: "10vh", opacity: 0 }}
          animate={{ x: "0vh", opacity: 1 }}
          className="z-10 p-2 ml-2 mb-2 flex flex-row gap-5"
        >
          <Image
            className="w-14 h-14 object-cover rounded-full"
            src={blog.avatarUrl}
            alt="Blog Image"
            height={2000}
            width={2000}
            quality={100}
          />
          <div className="text-white font-bold text-sm flex flex-col gap-1 justify-center">
            <div>{blog.author}</div>
            {/* <div>{blog.cratedAt}</div> */}
            <div>{new Date().toLocaleDateString("de-DE")}</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div>{blog.blogDescription}</motion.div>
    </div>
  );
}
