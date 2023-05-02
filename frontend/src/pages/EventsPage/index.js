import { json } from "react-router-dom";
import EventsPage from "./EventsPage";

const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
};

export { EventsPage, eventsLoader };
