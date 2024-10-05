import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col sm:flex-row gap-16 pl-2 pr-2 w-full lg:w-[85%] m-auto">
      <div className="w-full flex justify-center items-center">
        <Image
          className="fill"
          src="/contact.png"
          width={500}
          height={500}
          unoptimized
        />
      </div>
      <div className="w-full pl-14  flex flex-col gap-5 pr-10 justify-center">
        <input
          className="bg-slate-700 text-white p-3 rounded-md w-full"
          type="text"
          placeholder="Name and Surname"
        />
        <input
          className="bg-slate-700 text-white p-3 rounded-md w-full"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="bg-slate-700 text-white p-3 rounded-md w-full"
          type="text"
          placeholder="Phone Number (Optional)"
        />
        <textarea
          className="bg-slate-700 text-white p-3 rounded-md w-full h-48"
          type="text"
          placeholder="Email address"
        />
      </div>
    </div>
  );
}
