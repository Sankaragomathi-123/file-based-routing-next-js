import Link from "next/link";
import React from "react";

export default function Button({ link, children }) {
  if (link) {
    <Link href={link}>
      <a>{children} </a>
    </Link>;
  }
  return <button>{children} </button>;
}
