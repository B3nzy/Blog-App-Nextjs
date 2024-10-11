import React from "react";
import PostCard from "../../components/post-card/post-card";
import { blogs } from "./data";

export default function BlogPage() {
  return (
    <div className="flex flex-wrap gap-14 justify-center mt-10">
      {blogs.map((blog, index) => {
        return <PostCard key={blog.blogTitle} blog={blog} />;
      })}
    </div>
  );
}
