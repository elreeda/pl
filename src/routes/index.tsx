import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import Home from "../pages/Home";
import TrackingDetails from "../pages/TrackingDetails";
import { getOrderByIdAndZipCode } from "../api/order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/track",
    element: <TrackingDetails />,
    loader: async ({ request }) => {
      const { searchParams } = new URL(request.url);
      const orderId = searchParams.get("orderId");
      const zipCode = searchParams.get("zipCode");
      if (!orderId || !zipCode) {
        return redirect("/");
      }
      const getOrderFromStateUrl = window.history.state?.usr?.order;
      if (
        getOrderFromStateUrl &&
        getOrderFromStateUrl._id === orderId &&
        getOrderFromStateUrl.zip_code === zipCode
      ) {
        return getOrderFromStateUrl;
      }
      const response = await getOrderByIdAndZipCode({ id: orderId, zipCode });
      if (response.code !== "success") {
        return redirect("/");
      }
      return response.data;
    },
  },
]);

export default function AppRoutes() {
  return RouterProvider({ router });
}
