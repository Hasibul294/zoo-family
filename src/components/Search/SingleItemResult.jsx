import { useState } from "react";

/* eslint-disable react/prop-types */
const SingleItemResult = ({ singleItem }) => {
  const [flightDetailsClick, setFlightDetailsClick] = useState(false);
  const segmentLength = singleItem?.legs[0]?.segmentDetails?.length;
  const originTime =
    singleItem?.legs[0]?.segmentDetails[0]?.origin.dateTime.split(" ")[1];
  const destinationTime =
    singleItem?.legs[0]?.segmentDetails[
      `${segmentLength - 1}`
    ]?.destination.dateTime.split(" ")[1];

  const handleFlightDetails = (flag) => {
    setFlightDetailsClick(flag);

    console.log(flag);
  };

  return (
    <div>
      {/* flight overview */}
      <div className="grid grid-cols-5 divide-x p-2">
        <div className="col-span-4 ">
          <div className="flex justify-between items-center py-2">
            <p className="text-xs">Saturday, June 1</p>
            <div className="flex justify-center items-center space-x-1">
              <p>{singleItem?.legs[0]?.segment?.departureLocation}</p>
              <span>
                <img
                  src="https://flight.zoo.family/front_asset/img/plane-flight.png"
                  alt="flight"
                  className="w-5 h-5"
                />
              </span>
              <p>{singleItem?.legs[0]?.segment?.arrivalLocation}</p>
            </div>
            <p></p>
          </div>

          <div className="flex justify-between pt-[5px] pb-2.5">
            <div>
              <img src="" alt="" />
              <p className="text-sm">
                {singleItem?.legs[0]?.segmentDetails[0].fleet.operating}{" "}
                <span>
                  (
                  {
                    singleItem?.legs[0]?.segmentDetails[0].fleet
                      .operatingFlightNumber
                  }
                  )
                </span>
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-slate-700">{originTime}</p>
              <p className="text-xs">
                {singleItem?.legs[0]?.segment?.departureLocation}
              </p>
            </div>
            <div>
              <p className="p-0.5 text-xs border border-slate-800 text-center mb-0.5 rounded-sm">
                Economy
              </p>
              <p className="p-0.5 text-xs border border-slate-800 text-center rounded-sm">
                Refundable
              </p>
            </div>
            <div className="mr-10">
              <p className="text-lg font-bold text-slate-700">
                {destinationTime}
              </p>
              <p className="text-xs">
                {singleItem?.legs[0]?.segment?.arrivalLocation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-xs font-semibold text-red-500">7.00 % Discount</p>
          <p className="text-lg">
            BDT{" "}
            {singleItem?.priceBreakDownWithMarkup.totalFare.netTotalFareAmount}
          </p>
          <p className="text-xs font-semibold text-red-500 line-through">
            BDT{" "}
            {
              singleItem?.priceBreakDownWithMarkup.totalFare
                .netTotalGrossFareAmount
            }
          </p>
          <button className="px-3 py-1 bg-orange-500 rounded text-white">
            Book Now
          </button>
        </div>
      </div>
      {/* flight details  */}
      <div className="flex justify-between px-4 py-1 mt-1 bg-gray-200">
        <div>Send Query : </div>
        <button
          onClick={() => handleFlightDetails(!flightDetailsClick)}
          className="flex items-center"
        >
          <p>Flight Details</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      {flightDetailsClick && (
        <div className="px-5 pt-5">
          <div className="w-1/6 bg-sky-800 text-xs text-white flex justify-center items-center space-x-4 py-3">
            <p className=" text-xs text-white">
              {singleItem?.legs[0]?.segment?.departureLocation}
            </p>
            <span>
              <img
                src="https://flight.zoo.family/front_asset/img/aro-icon.png"
                alt="flight"
                className="w-[13px] h-[13px]"
              />
            </span>
            <p className=" text-xs text-white">
              {singleItem?.legs[0]?.segment?.arrivalLocation}
            </p>
          </div>
          {singleItem?.legs[0]?.segmentDetails.map((item, index) => (
            <div
              className="pl-4 pr-0 py-4 flex justify-between  border-t border-gray-4 00"
              key={index}
            >
              <div className="text-xs">logo</div>
              <div>
                <p className="text-xs uppercase">{item?.fleet.operating}</p>
                <p className="text-xs">
                  Aircraft: {item?.fleet.operatingFlightNumber}{" "}
                </p>
              </div>
              <div>
                <p className="text-xs">{item?.origin?.dateTime} </p>
                <p className="text-xs uppercase">{item?.origin?.airport}</p>
              </div>
              <div className="">
                <span className="text-xs text-sky-800 px-1 py-0.5 border border-sky-600 rounded">
                  Economy
                </span>
              </div>
              <div>
                <div className="flex justify-between gap-16 mb-6">
                  <div>
                    <p className="text-xs">{item?.destination?.dateTime} </p>
                    <p className="text-xs uppercase">
                      {item?.destination?.airport}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">{item?.fleet.operating}</span>
                    <span className="text-xs">
                      {item?.fleet.operatingFlightNumber}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between gap-8 ">
                  <div className="border-x border-gray-400 px-4">
                    <p className="text-xs">
                      Available Seat :{" "}
                      {
                        singleItem?.priceBreakDownWithMarkup?.fareDetails[0]
                          ?.passengerInfo?.fareComponents[0]?.segments[0]
                          ?.segment?.seatsAvailable
                      }
                    </p>
                    <p className="text-xs">
                      Cabin:{" "}
                      {
                        singleItem?.priceBreakDownWithMarkup?.fareDetails[0]
                          ?.passengerInfo?.fareComponents[0]?.segments[0]
                          ?.segment?.cabinCode
                      }{" "}
                      ( rbd:{" "}
                      {
                        singleItem?.priceBreakDownWithMarkup?.fareDetails[0]
                          ?.passengerInfo?.fareComponents[0]?.segments[0]
                          ?.segment?.bookingCode
                      }
                      )
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Baggage</span>
                    <span className="text-xs">
                      {singleItem?.baggageInfo[0]?.details[0]?.pieceCount} Pcs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleItemResult;
