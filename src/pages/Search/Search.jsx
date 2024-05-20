import { useEffect, useState } from "react";
import InputField from "../../components/Ui/InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../../components/Ui/Sidebar";
import SearchResult from "../../components/Search/SearchResult";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("./zooFlightData.json") // Path to your local JSON file
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setFlightData(data);
            setIsLoading(false);
          });
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen">
      {/* all buttons and field  */}
      <section className="w-full bg-[#3c6382] pt-[25px]">
        <div className="max-w-7xl mx-auto">
          <div className=" flex space-x-1">
            <button className="p-4 rounded-t-lg bg-orange-500 text-white">
              One Way
            </button>
            <button className="p-4 rounded-t-lg bg-white">Round Trips</button>
            <button className="p-4 rounded-t-lg bg-white">Multi-city</button>
          </div>
          {/* all fields  */}
          <div className="flex items-center space-x-2 my-2 mb-5">
            <div className="flex items-center space-x-2 border border-white p-1 px-6 bg-white rounded">
              <img
                src="https://flight.zoo.family/front_asset/img/departures.png"
                alt="flight"
                className="w-5 h-[15px]"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400">Flying from</span>
                <InputField
                  type="text"
                  placeholder="City of Airport"
                  value="DAC"
                  default
                  className=""
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 border border-white p-1 px-6 bg-white rounded">
              <img
                src="https://flight.zoo.family/front_asset/img/return.png"
                alt="flight"
                className="w-5 h-[15px]"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400">Flying from</span>
                <InputField
                  type="text"
                  placeholder="City of Airport"
                  value="DXB"
                  default
                  className=""
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 border border-white p-0.5 px-6 bg-white rounded">
              <img
                src="https://flight.zoo.family/front_asset/img/calendar.png"
                alt="flight"
                className="w-4 h-4"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400">Departing</span>
                <DatePicker
                  className="focus:outline-none"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="EEEE, dd MMMM, yyyy"
                  minDate={new Date()}
                />
              </div>
            </div>
            <div className="pl-6 pr-10 border border-white p-1 bg-white rounded">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400">Travelers</span>
                <p className="text-sm">1 Passenger, Economy</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white py-2.5 px-10 rounded">
              <div className="flex items-center space-x-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Modify Search</span>
              </div>
            </button>
          </div>
        </div>
        <div className="bg-[#0a3d62] w-full py-2">
          <div className="max-w-7xl mx-auto text-white text-center">
            <p className="text-xs mb-1">22 May, 2024</p>
            <p className="flex justify-center items-center space-x-1">
              <span>DAC</span>
              <span>
                <img
                  src="https://flight.zoo.family/front_asset/img/aro-icon.png"
                  alt="flight"
                  className="w-5 h-5"
                />
              </span>
              <span>DXB</span>
            </p>
          </div>
        </div>

        <div className="bg-[#3c6382] py-5 mt-2  text-white uppercase">
          <div className="max-w-7xl mx-auto flex justify-around items-center">
            <div>search results</div>
            <div>passenger details </div>
            <div>booking confirmation</div>
          </div>
        </div>
      </section>

      {/* sidebar and search results  */}
      <section className="max-w-7xl mx-auto py-6 grid grid-cols-4 gap-5">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-3">
          {isLoading ? (
            <div className="flex flex-col space-y-2 animate-pulse h-screen my-2">
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
              <div className="w-full h-16 bg-violet-200 rounded-sm py-3"></div>
            </div>
          ) : (
            <SearchResult searchItems={flightData.result}></SearchResult>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
