import { useLoaderData } from "react-router-dom";

function TrackingDetails() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Tracking Details</h1>
    </div>
  );
}

export default TrackingDetails;
