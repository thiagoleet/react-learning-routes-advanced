import { json, redirect } from "react-router-dom";

const baseURL = "http://localhost:8080/events";
const headers = {
  "Content-Type": "application/json",
};

const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = baseURL;

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = `${baseURL}/${eventId}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
};

export default action;
