import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

export default function EventItem({ title, id, date, location, image }) {
  const readleData = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formatedAddress = location.replace(" ", "\n");

  const exploreLink = `/events/${id} `;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem",
      }}>
      <div>
        <img
          src={"/" + image}
          alt="event-images"
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      <div>
        <div>
          <h2>{title} </h2>
        </div>
        <div>
          <time> {readleData} </time>
        </div>
        <div>
          <address>{formatedAddress} </address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Link </Link>
        </div>
      </div>
    </div>
  );
}
