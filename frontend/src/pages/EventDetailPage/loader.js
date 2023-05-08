import { json } from "react-router-dom";

const url = "http://localhost:8080/events";

const loader = async ({ params }) => {
  const { eventId } = params;
  const response = await fetch(`${url}/${eventId}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export default loader;
