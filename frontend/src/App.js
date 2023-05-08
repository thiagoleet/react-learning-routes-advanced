import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  EventDetailPage,
  eventLoader,
  deleteEventAction,
} from "./pages/EventDetailPage";
import { EditEventPage } from "./pages/EditEventPage";
import { ErrorPage } from "./pages/Error";
import { EventsPage, eventsLoader } from "./pages/EventsPage";
import { EventsRootLayout } from "./pages/EventsRoot";
import { HomePage } from "./pages/HomePage";
import { NewEventPage } from "./pages/NewEventPage";
import { NewsletterPage, newsletterAction } from "./pages/NewsletterPage";
import { RootLayout } from "./pages/Root";

import { manipulateEventAction } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
