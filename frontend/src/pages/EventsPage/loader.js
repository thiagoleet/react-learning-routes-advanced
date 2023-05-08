import { defer } from "react-router-dom";
import { loadEvents } from "../../services";

const loader = async () => {
  return defer({
    events: loadEvents(),
  });
};

export default loader;
