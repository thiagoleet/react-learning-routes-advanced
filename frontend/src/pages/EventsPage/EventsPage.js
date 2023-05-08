import { useLoaderData, Await } from "react-router-dom";
import { EventsList, Loading } from "../../components";
import { Suspense } from "react";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;
