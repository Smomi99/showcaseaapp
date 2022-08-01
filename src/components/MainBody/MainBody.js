import React, { useEffect, useState } from "react";
import FilterSection from "../FilterSection/FilterSection";
import SingleService from "../SingleService/SingleService";
import Subscription from "../Subscription/Subscription";

const MainBody = () => {
  const [displayServices, setDisplayServices] = useState([]);
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        setDisplayServices(data);
        setServices(data);
      });
  }, []);

  const sendServiceCategory = () => {
    return [...new Set(services.map((item) => item.brand))];
  };
  const sendLocation = () => {
    return [...new Set(services.map((item) => item.area))];
  };

  const handleServiceCategory = (brand) => {
    const filteredData = services.filter((item) => {
      if (item.brand === brand) {
        return item;
      }
    });

    setDisplayServices(filteredData);
  };
  const handleLocation = (brand) => {
    const filteredData = services.filter((item) => {
      if (item.area === brand) {
        return item;
      }
    });

    setDisplayServices(filteredData);
  };

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  sm:mt-56 gap-4 lg:mt-28 xl:mt-28 md:mt-32 mt-36">
      <div className=" display">
        <FilterSection
          brands={sendServiceCategory()}
          onServiceFilter={handleServiceCategory}
          location={sendLocation()}
          onLocationFilter={handleLocation}
        />
      </div>
      <div className="lg:col-span-2 xl:col-span-2 ">
        <div className="">
          <div class=" lg:fixed md:fixed sm:fixed sm:top-12 md:top-8 lg:top-8 w-1/3 ">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a service"
              required=""
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <h1 className="font-bold text-xl">
            Discover your next local service pro here 👇
          </h1>

          <div className="grid grid-cols-1  gap-4 mt-2">
            {displayServices
              // eslint-disable-next-line array-callback-return
              .filter((services) => {
                if (searchTerm === "") {
                  return services;
                } else if (
                  services.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  services.brand
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return services;
                }
              })
              .map((service) => (
                <SingleService
                  key={service.key}
                  service={service}
                ></SingleService>
              ))}
          </div>
        </div>
      </div>
      <div className="border-l-2 flex justify-center ">
        <Subscription />
      </div>
    </div>
  );
};

export default MainBody;
