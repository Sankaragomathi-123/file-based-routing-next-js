import React from "react";
import EventItem from "./EventItem";

export default function EventList({ items }) {
  return (
    <div>
      {items.map((event) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              boxShadow: "2px 3px 5px solid black",
              alignItems: "center",
              width: "100%",
              gap: "2rem",
              boxShadow: "2px 3px 5px solid black",
            }}>
            <EventItem
              id={event.id}
              title={event.title}
              location={event.location}
              date={event.date}
              image={event.image}
            />
          </div>
        );
      })}
    </div>
  );
}
