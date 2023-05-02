import EventsPage from "./EventsPage";

const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // TODO: incorrect response
  } else {
    return response;
  }
};

export { EventsPage, eventsLoader };
