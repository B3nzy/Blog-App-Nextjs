"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const links = [
  { title: "Homepage", url: "/" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: "Blog", url: "/blog" },
];

export default function Links() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const session = false;
  const isAdmin = true;

  return (
    <>
      {/* For Large Screen */}
      <div className="hidden sm:block flex-row gap-2 sm:gap-5 md:gap-8 items-center text-sm sm:text-base">
        {links.map((link) => {
          return (
            <Link
              className={[
                path === link.url
                  ? "border bg-slate-300 text-slate-800 rounded-full"
                  : "",
                "md:pl-5 md:pr-5 md:pt-2 md:pb-2 pl-2 pr-2 pt-1 pb-1",
              ].join(" ")}
              key={link.url}
              href={link.url}
            >
              {link.title}
            </Link>
          );
        })}
        {session ? (
          <>
            {isAdmin && (
              <Link
                className={[
                  path === "/admin"
                    ? "border bg-slate-300 text-slate-800 rounded-full"
                    : "",
                  "md:pl-5 md:pr-5 md:pt-2 md:pb-2 pl-2 pr-2 pt-1 pb-1",
                ].join(" ")}
                href={"/admin"}
              >
                Admin
              </Link>
            )}
            <button
              className="border ml-2 sm:ml-5 md:ml-8 p-2 bg-slate-200 text-slate-800 rounded-sm"
              href={"/logout"}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="border ml-2 sm:ml-5 md:ml-8 p-2 bg-slate-300 text-slate-800 rounded-sm"
            href={"/login"}
          >
            Login
          </button>
        )}
      </div>
      {/* For Mobile Screen */}
      <button className="sm:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <HiMenuAlt4 />}
      </button>
      {isOpen && (
        <div
          className={`sm:hidden absolute top-16 h-[calc(100vh-64px)] bg-slate-500 shadow-2xl z-10 w-[75vw] right-0 flex flex-col justify-center gap-2 items-center overflow-hidden`}
        >
          {links.map((link) => {
            return (
              <Link
                className={[
                  path === link.url
                    ? "border bg-slate-300 text-slate-800 rounded-full"
                    : "",
                  "pl-5 pr-5 pt-2 pb-2",
                ].join(" ")}
                key={link.url}
                href={link.url}
              >
                {link.title}
              </Link>
            );
          })}

          {session ? (
            <>
              {isAdmin && (
                <Link
                  className={[
                    path === "/admin"
                      ? "border bg-slate-300 text-slate-800 rounded-full"
                      : "",
                    "pl-5 pr-5 pt-2 pb-2",
                  ].join(" ")}
                  href={"/admin"}
                >
                  Admin
                </Link>
              )}
              <button
                className="border p-2 pr-5 pl-5 mt-10 bg-slate-200 text-slate-800 rounded-sm"
                href={"/logout"}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="border p-2 pr-5 pl-5 mt-10 bg-slate-300 text-slate-800 rounded-sm"
              href={"/login"}
            >
              Login
            </button>
          )}
        </div>
      )}
    </>
  );
}
