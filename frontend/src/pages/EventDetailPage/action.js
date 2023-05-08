import { json, redirect } from "react-router-dom";

const url = "http://localhost:8080/events";

const action = async ({ params }) => {
  const { eventId } = params;

  const response = await fetch(`${url}/${eventId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete the event." }, { status: 500 });
  } else {
    return redirect("/events");
  }
};

export default action;
