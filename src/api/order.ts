export const getOrderByIdAndZipCode = async ({
  id,
  zipCode,
}: {
  id: string;
  zipCode: string;
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
