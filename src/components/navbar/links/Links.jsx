import Link from "next/link";
import React from "react";

export default function Links() {
  const links = [
    { title: "Homepage", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];

  return (
    <div>
      {links.map((link) => {
        return (
          <Link key={link.url} href={link.url}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
