import { Order } from "../types/order";

type OrderResponseError = {
  code: "bad_request" | "not_found" | "error";
  message: string;
};

type OrderResponseSuccess = {
  code: "success";
  data: Order;
};

interface GetOrderByIdAndZipCode {
  (args: { id: string; zipCode: string }): Promise<
    OrderResponseError | OrderResponseSuccess
  >;
}

export const getOrderByIdAndZipCode: GetOrderByIdAndZipCode = async ({
  id,
  zipCode,
}) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_HOST}/orders/${id}?zip=${zipCode}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      code: "error",
      message: "Error while fetching order",
    };
  }
};
