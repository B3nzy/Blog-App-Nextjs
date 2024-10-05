import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-16 pl-2 pr-2 w-full lg:w-[85%] m-auto">
      <div className="w-full pl-14  flex flex-col gap-14 pr-10">
        <div className="text-6xl sm:text-8xl w-[80%]">
          Creative Thoughts Agency.
        </div>
        <p className="text-base sm:text-lg">
          Discover fresh perspectives, dive into insightful stories, and explore
          a world of ideas. Whether you're here to find inspiration, learn
          something new, or simply unwind with some great content, we're
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
        <Image src="/brands.png" width={500} height={500} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          className="fill"
          src="/hero.gif"
          width={600}
          height={600}
          unoptimized
        />
      </div>
    </div>
  );
}
