import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../helpers/api.utils";

export default function FilterEvent() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) return <p>Loading.. </p>;

  if (!filteredEvents && filteredEvents === 0)
    return (
      <div>
        <p>No events Found </p>
        <Link href="/events">Show All Events </Link>
      </div>
    );

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );

  export async function getStaticProps(context) {
    const { params } = context;

    const filterData = params?.slug;

    const filterDataYear = filterData[0];
    const filterDataMonth = filterData[1];

    const newYear = +filterDataYear;
    const newMonth = +filterDataMonth;

    if (
      isNaN(newYear) ||
      isNaN(newMonth) ||
      newYear > 2022 ||
      newYear < 2021 ||
      newMonth > 5 ||
      newMonth < 1
    ) {
      return {
        props: {
          hasError: true,
        },
      };
    }

    const filteredEvents = getFilteredEvents({
      year: newYear,
      month: newMonth,
    });

    return {
      props: {
        events: filteredEvents,
      },
    };
  }
}
