import { json } from "react-router-dom";

const url = "http://localhost:8080/events";

export const loadEvents = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();

    return resData.events;
  }
};

export const loadEvent = async (id) => {
  const response = await fetch(`${url}/${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();

    return resData.event;
  }
};
