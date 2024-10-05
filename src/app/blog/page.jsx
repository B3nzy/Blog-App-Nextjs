import React from "react";
import PostCard from "../../components/post-card/post-card";

export default function BlogPage() {
  return (
    <div className="flex flex-wrap gap-14 justify-center mt-10">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
