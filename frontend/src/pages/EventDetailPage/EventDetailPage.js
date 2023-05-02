import { useRouteLoaderData } from "react-router-dom";
import { EventItem } from "../../components";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return <EventItem event={event} />;
};

export default EventDetailPage;
