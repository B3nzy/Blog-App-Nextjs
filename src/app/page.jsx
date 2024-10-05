import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-16 pl-2 pr-2 w-full lg:w-[85%] m-auto">
      <div className="w-full lg:pl-14 pl-5  flex flex-col gap-14 lg:pr-10">
        <div className="text-6xl lg:text-8xl">Creative Thoughts Agency.</div>
        <p className="text-base lg:text-lg">
          Discover fresh perspectives, dive into insightful stories, and explore
          a world of ideas. Whether you&apos;re here to find inspiration, learn
          something new, or simply unwind with some great content, we&apos;re
          thrilled to have you join our community.
        </p>
        <div className="flex flex-row gap-5">
          <button className="border bg-sky-700 text-white p-2 rounded-sm w-36">
            Learn More
          </button>
          <button className="border bg-white text-black p-2 rounded-sm w-36">
            Contact
          </button>
        </div>
        <Image src="/brands.png" width={500} height={100} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          className="fill"
          src="/hero.gif"
          width={500}
          height={500}
          unoptimized
        />
      </div>
    </div>
  );
}
