import classNames from "classnames";
import format from "date-fns/format";

import { Checkpoint } from "../types/order";

interface TimelineProps {
  checkpoints: Checkpoint[];
}

const Timeline: React.FC<TimelineProps> = ({ checkpoints }) => {
  return (
    <>
      {checkpoints.reverse().map((cp, index) => (
        <div
          key={cp.event_timestamp}
          className="grid grid-cols-[120px,16px,1fr] gap-x-8"
        >
          <div className="-mt-1">
            <div className="text-sm text-gray-500 leading-6">
              {format(new Date(cp.event_timestamp), "dd MMM yyyy HH:mm")}
            </div>
            <div className="text-sm">
              {cp.city}, {cp.country_iso3}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={classNames(
                "rounded-full h-4 w-4 flex items-center justify-center",
                {
                  "bg-green-200/60": index === 0,
                  "bg-gray-200/60": index !== 0,
                }
              )}
            >
              <div
                className={classNames("rounded-full h-2 w-2 ", {
                  "bg-green-800": index === 0,
                  "bg-gray-700/90": index !== 0,
                })}
              ></div>
            </div>
            {checkpoints.length - 1 > index ? (
              <div className="h-full min-h-[80px] w-[1px] bg-gray-300"></div>
            ) : null}
          </div>
          <div className="-mt-1">
            <div className="font-bold">{cp.status}</div>
            <p className="text-sm pb-4">{cp.status_details}</p>
            {/* NOTE: for now we are only aware of two metas. pickup address and delivery time.
                if more metas are added we should consider a more generic way of displaying them.
            */}
            {cp.meta && "delivery_date" in cp.meta ? (
              <div className="text-pl-blue text-sm">
                {format(new Date(cp.meta.delivery_date), "dd MMM yyyy")}{" "}
                {cp.meta.delivery_time_frame_from} -{" "}
                {cp.meta.delivery_time_frame_to}
              </div>
            ) : null}
            {cp.meta && "pickup_address" in cp.meta ? (
              <a
                className="block text-pl-blue text-sm"
                href={cp.meta.pickup_address_link}
                target="_blank"
                rel="noreferrer"
              >
                {cp.meta.pickup_address} &gt;&gt;
                {/* NOTE: Having an uninteractive screenshot of the address is really not useful
                      most of the time users won't be able to figure out where the address is.
                      I believe it's better to just link to the address on Google Maps. this will also
                      some white space in the UI.
                   */}
                {/* <div className="h-40 w-80 rounded-md overflow-hidden mt-2 mb-8">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={cp.meta.pickup_address_map_url}
                    alt=""
                  />
                </div> */}
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
