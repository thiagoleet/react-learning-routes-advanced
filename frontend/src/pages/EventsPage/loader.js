import { json, defer } from "react-router-dom";

const url = "http://localhost:8080/events";

const loadEvents = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();

    return resData.events;
  }
};

const loader = async () => {
  return defer({
    events: loadEvents(),
  });
};

export default loader;
