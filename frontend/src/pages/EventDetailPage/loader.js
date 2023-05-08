import { defer } from "react-router-dom";
import { loadEvent, loadEvents } from "../../services";

const loader = async ({ params }) => {
  const { eventId } = params;

  return defer({
    event: await loadEvent(eventId),
    events: loadEvents(),
  });
};

export default loader;
