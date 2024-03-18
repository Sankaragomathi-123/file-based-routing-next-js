import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
// import { getAllEvents } from "../../DUMMY";
import { getAllEvents } from "../../helpers/api.utils";

export default function Events(props) {
  // const eventsAll = getAllEvents();
  const eventsAll = props.events;
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={eventsAll} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
