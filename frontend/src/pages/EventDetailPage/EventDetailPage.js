import { useLoaderData } from "react-router-dom";
import { EventItem } from "../../components";

const EventDetailPage = () => {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
};

export default EventDetailPage;
