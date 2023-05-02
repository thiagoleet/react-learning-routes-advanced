import { Outlet } from "react-router-dom";
import { EventsNavigation } from "../../components";

const EventsRootLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRootLayout;
