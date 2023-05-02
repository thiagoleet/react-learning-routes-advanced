import { useLoaderData } from "react-router-dom";
import { EventsList } from "../../components";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return <EventsList events={events} />;
};

export default EventsPage;
