import { json } from "react-router-dom";
import EventDetailPage from "./EventDetailPage";

const eventLoader = async ({ params }) => {
  const { eventId } = params;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export { EventDetailPage, eventLoader };
