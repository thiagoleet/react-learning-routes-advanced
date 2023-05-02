// Challenge / Exercise

// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  EditEventPage,
  EventDetailPage,
  EventsPage,
  HomePage,
  NewEventPage,
  Root,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "events/:eventId", element: <EventDetailPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
