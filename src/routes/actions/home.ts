import { redirect } from "react-router-dom";

import { getOrderByIdAndZipCode } from "../../api/order";

export default async function homeAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const orderId = formData.get("orderId") as string;
  const zipCode = formData.get("zipCode") as string;

  const response = await getOrderByIdAndZipCode({ id: orderId, zipCode });
  if (response.hasOwnProperty("code") && response.code !== "success") {
    return {
      pending: false,
      error:
        "We could not find your order. Please check your order number and zip code and try again.",
    };
  } else if (response.code === "success") {
    window.history.pushState({ order: response.data }, "");
    return redirect(
      `/track?orderId=${response.data._id}&zipCode=${response.data.zip_code}`
    );
  } else {
    return {
      pending: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
