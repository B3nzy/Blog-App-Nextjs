import React from "react";
import PostCard from "../../components/post-card/post-card";

export default function BlogPage() {
  const blogs = [
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      blogTitle: "10 inspiring photos",
      blogDescription:
        "A serene image of the sunrise breaking over a misty mountain range. The vibrant colors of the sky remind us that every day is a fresh start, filled with opportunities to innovate and push the boundaries of what's possible.",
    },
  ];

  return (
    <div className="flex flex-wrap gap-14 justify-center mt-10">
      {blogs.map((blog, index) => {
        return <PostCard key={blog.blogTitle} blog={blog} />;
      })}
    </div>
  );
}
