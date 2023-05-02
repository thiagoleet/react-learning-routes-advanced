import { useLoaderData } from "react-router-dom";
import { EventsList } from "../../components";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;
