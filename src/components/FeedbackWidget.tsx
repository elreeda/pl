// I got the inspiration from this blog from parellab https://parcellab.com/blog/how-to-build-branded-tracking-pages-that-convert/
// so I decided to build feedback widget for the tracking page

const FeedbackWidget = () => {
  return (
    <div className="shadow-xl bg-white p-4">
      <h3 className="font-bold mb-4">
        Were you satisfied with the perfomance of the carrier
      </h3>
      <div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Yes
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          No
        </button>
      </div>
      <h3 className="font-bold mb-4">
        Were satisfied with the communication during shipping
      </h3>
      <div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Yes
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          No
        </button>
      </div>
    </div>
  );
};

export default FeedbackWidget;
