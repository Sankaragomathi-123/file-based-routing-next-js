import React from "react";
import EvnetList from "../components/events/EventList";
// import { getFeaturedEvents } from "../DUMMY";

import { getFeaturedEvents } from "../helpers/api.utils";

function Home(props) {
  // const filterEvents = getFeaturedEvents();
  console.log(props.events, "Event");
  return (
    <div>
      <EvnetList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
      revalidate: 1800,
    },
  };
}

export default Home;
