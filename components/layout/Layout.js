import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}>
        <Link href="/">All Events </Link>
        <Link href="/events">Browser All Events </Link>
      </div>
      <main>{children} </main>
    </>
  );
}
