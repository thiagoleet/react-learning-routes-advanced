import { useLoaderData } from "react-router-dom";
import { EventsList } from "../../components";

const EventsPage = () => {
  const events = useLoaderData();

  return <EventsList events={events} />;
};

export default EventsPage;
