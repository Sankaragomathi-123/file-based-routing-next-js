import { useRouter } from "next/router";
import React from "react";
import { getEventById, getAllEvents } from "../../helpers/api.utils";

export default function EventId(props) {
  // const router = useRouter();
  // const event = router.query.eventId;
  // const eventId = getEventById(event);
  // console.log(eventId, "eventId");

  const eventId = props.selectedEvents;

  if (!eventId) {
    return <p>No event Found </p>;
  }

  return (
    <div>
      <h2>{eventId.title} </h2>
      <p>{eventId.description} </p>
      <img src={"/" + eventId.image} style={{ width: "200px" }} />
      <p>{eventId.date} </p>
      <p>{eventId.location} </p>
    </div>
  );
}

export async function getStaticProps(context) {
  const eventId = context?.params?.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvents: event,
      revalidate: 30,
    },
  };
}

export async function getStaticPaths() {
  const eventIdpath = await getAllEvents();

  const path = eventIdpath.map((event) => ({
    params: { eventId: event?.id },
  }));
  return {
    paths: path,
    fallback: true,
  };
}
