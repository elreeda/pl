import { useLoaderData } from "react-router-dom";
import format from "date-fns/format";

import Timeline from "../components/Timeline";
import Articles from "../components/Articles";
import dhlImg from "../assets/dhl.png";
import upsImg from "../assets/ups.png";
import { Order } from "../types/order";

const CARRIER_LOGO: Record<string, string> = {
  dhl: dhlImg,
  ups: upsImg,
};

const TrackingDetails = () => {
  const data = useLoaderData() as Order;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="pt-2 pb-6 border-b-gray-200 border-b-[1px]">
        <h4 className="text-xl font-black mt-1 mb-4 uppercase">Order</h4>
        <div className="">
          <span className="inline-block w-40">Order id</span>
          <span className="font-bold">{data.delivery_info.orderNo}</span>
        </div>
        <div>
          <span className="inline-block w-40">Date placed</span>
          <span>
            {format(new Date(data.delivery_info.order_date), "dd MMM yyyy")}
          </span>
        </div>
      </div>
      <div className="pt-8 pb-6 border-b-gray-200 border-b-[1px]">
        <h4 className="text-xl font-black mt-1 mb-4 uppercase">Articles</h4>
        <div className="mt-3 mb-4 flex gap-8">
          <Articles articles={data.delivery_info.articles} />
        </div>
      </div>
      <div className="pt-8 pb-6 border-b-gray-200 border-b-[1px]">
        <h4 className="text-xl font-black mt-1 mb-4 uppercase">
          Tracking details
        </h4>
        <div className="mt-3 mb-4">
          <Timeline checkpoints={data.checkpoints} />
        </div>
      </div>
      <div className="pt-8 pb-6 border-b-gray-200 border-b-[1px]">
        <h4 className="text-xl font-black mt-1 mb-4 uppercase">Delivery</h4>
        <div className="mt-3 mb-4">
          <div className="font-bold mb-2">Carrier</div>
          <div className="flex justify-between max-w-xs mb-1">
            <div>Tracking number</div>
            <div>{data.tracking_number}</div>
          </div>
          <div className="flex justify-between max-w-xs">
            <div>{data.courier}</div>
            <div className="h-5">
              <img className="h-full" src={CARRIER_LOGO[data.courier]} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-3 mb-4">
          <div className="font-bold mb-2">Delivery Address</div>
          <div>
            <div>{data.delivery_info.recipient}</div>
            <div>{data.delivery_info.street}</div>
            <div className="">
              {data.zip_code} {data.delivery_info.city}{" "}
              {data.destination_country_iso3}
            </div>
            <div className="mt-4">{data.delivery_info.email}</div>
          </div>
        </div>
      </div>
      <footer className="mt-4">
        <div className="text-sm text-gray-400">by Parcellab GmbH 2023</div>
      </footer>
    </div>
  );
};

export default TrackingDetails;
