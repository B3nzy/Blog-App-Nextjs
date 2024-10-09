"use client";
import { motion } from "framer-motion";

export default function PostCard({ blog }) {
  const blogMainDivVariant = { initial: {}, animate: { scale: 1.025 } };
  const blogMainDivShadowVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
  };
  const blogTitleVariant = { initial: { y: "7vh" }, animate: { y: "1vh" } };
  const blogTitleUnderlineVariant = {
    initial: { y: "7vh" },
    animate: { y: "0vh", width: "250px" },
  };
  const blogDescriptionVariant = {
    initial: { y: "2vh", opacity: 0 },
    animate: { y: "0vh", opacity: 1 },
  };
  return (
    <motion.div
      className="w-[400px] h-[400px] bg-cover bg-no-repeat bg-center flex flex-col hover:cursor-pointer hover:shadow-lg justify-center items-center"
      style={{ backgroundImage: `url(${blog.imageUrl})` }}
      initial="initial"
      animate="initial"
      whileHover="animate"
      variants={blogMainDivVariant}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] bg-black"
        variants={blogMainDivShadowVariant}
      ></motion.div>
      <motion.h1
        className="text-white text-2xl font-mono p-5"
        variants={blogTitleVariant}
      >
        {blog.blogTitle}
      </motion.h1>
      <motion.div
        className="bg-orange-700 w-10 h-[3px] rounded"
        variants={blogTitleUnderlineVariant}
      />
      <motion.div
        className="text-white p-5 text-sm"
        variants={blogDescriptionVariant}
      >
        {blog.blogDescription}
      </motion.div>
    </motion.div>
  );
}
