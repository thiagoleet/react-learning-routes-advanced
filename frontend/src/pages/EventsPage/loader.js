import { json } from "react-router-dom";

const url = "http://localhost:8080/events";

const loader = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
};

export default loader;
