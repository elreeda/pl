import { redirect } from "react-router-dom";

import { getOrderByIdAndZipCode } from "../../api/order";

export default async function trackLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get("orderId");
  const zipCode = searchParams.get("zipCode");
  if (!orderId || !zipCode) {
    return redirect("/");
  }
  const getOrderFromStateUrl = window.history.state?.order;
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
}
