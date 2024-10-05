import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col sm:flex-row gap-16 pl-2 pr-2 w-full lg:w-[85%] m-auto justify-center">
      <div className="w-full pl-14  flex flex-col gap-14 pr-10">
        <div className="text-3xl text-sky-600">About Agency</div>
        <div className="text-5xl sm:text-6xl ">
          Discover TensorBlog: Your Gateway to the Tech Revolution
        </div>
        <div className="text-base sm:text-lg flex flex-col gap-4">
          <p>
            At TensorBlog, we are passionate about exploring the ever-evolving
            world of technology, artificial intelligence, data science, and
            beyond. Whether you’re a seasoned professional, an enthusiastic
            learner, or simply curious about how cutting-edge tech is shaping
            our world, you’ll find something here for you.
          </p>
          <p>
            We aim to break down complex concepts into engaging, digestible
            content—balancing depth with clarity. Our mission is to empower
            readers with knowledge that’s both insightful and actionable,
            helping you stay ahead of the curve in the fast-paced digital age.
          </p>
          <p>
            Join us on this journey of discovery, innovation, and tech
            exploration. Let's dive deep into the world of AI, data, and tech
            trends—one blog post at a time.
          </p>
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl text-sky-600">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl text-sky-600">234 K+</h1>
            <p>People reached</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl text-sky-600">5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image className="" src={"/about.png"} height={500} width={500} />
      </div>
    </div>
  );
}
