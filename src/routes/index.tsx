import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import homeAction from "./actions/home";
import TrackingDetails from "../pages/TrackingDetails";
import trackLoader from "./loaders/track";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    action: homeAction,
  },
  {
    path: "/track",
    element: <TrackingDetails />,
    loader: trackLoader,
  },
]);

export default function AppRoutes() {
  return RouterProvider({ router });
}
