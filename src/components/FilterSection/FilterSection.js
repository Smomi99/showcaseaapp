import React, { useState } from "react";

const FilterSection = ({
  brands,
  location,
  onLocationFilter,
  onServiceFilter,
}) => {
  console.log(brands);
  const [filters, setFilters] = useState({
    brand: "",
    area: "",
  });
  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "brand":
        onServiceFilter(value);
        break;
      case "area":
        onLocationFilter(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="fixed overflow-x-hidden  overflow-y-auto h-screen">
      <div className="mx-2 lg:w-10/11 md:w-10/12 sm:9/12 rounded flex-1 border m-2">
        <div className="my-2 flex rounded  border-gray-200 bg-white p-4">
          <div class="flex justify-center">
            <div class=" lg:w-64 md:w-32 w-24">
              <select
                class="form-select border appearance-none block  h-12 xl:w-4/5 lg:w-4/5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={handleInput("brand")}
              >
                <option value="" selected>
                  Service Category
                </option>
                {brands.map((brand) => (
                  <option value={brand} key={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 lg:w-10/11 md:w-10/12 sm:9/12  rounded flex-1 border m-2">
        <div className="my-2 flex rounded  border-gray-200 bg-white p-4">
          <div class="flex justify-center">
            <div class="lg:w-64 md:w-32 sm:w-24">
              <h1 className="mb-2 text-md font-bold text-blue-700">Location</h1>
              <select
                class="form-select border appearance-none block h-12 xl:w-4/5 lg:w-4/5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={handleInput("area")}
              >
                <option selected>City / Metro Area</option>
                {location.map((area) => (
                  <option value={area} key={area}>
                    {area}
                  </option>
                ))}
              </select>

              <div class="relative pt-1 mt-4">
                <input
                  type="range"
                  class="
      form-range
      w-4/5
      cursor-pointer
      h-2
      p-0
      bg-gray-100
      border rounded
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                  id="customRange1"
                />
              </div>
              <div className="flex gap-4 mt-2 ">
                <button
                  class="bg-gray-100 hover:bg-blue-500 text-gray-500 
                 hover:text-white py-2 px-4 border hover:border-transparent rounded"
                >
                  50 miles
                </button>
                <button class="bg-gray-100 hover:bg-blue-500 text-gray-500  hover:text-white py-2 px-4 border hover:border-transparent rounded">
                  from ZIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 lg:w-10/11 md:w-10/12 sm:9/12  rounded flex-1 border m-2">
        <div className="my-2 flex rounded  border-gray-200 bg-white p-4">
          <div class="flex justify-center">
            <div class=" xl:w-64 md:w-64">
              <h1 className="mb-2 text-md font-bold text-blue-700">
                Business Designation
              </h1>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Asian Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Black Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Hispanic Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">LGBTQ Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Native American Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Veteran Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Woman Owned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 lg:w-10/11 md:w-10/12 sm:9/12  rounded flex-1 border m-2 mb-48">
        <div className="my-2 flex rounded  border-gray-200 bg-white p-4">
          <div class="flex justify-center">
            <div class=" xl:w-64 md:w-64">
              <h1 className="mb-2 text-md font-bold text-blue-700">
                Post Informations
              </h1>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Asian Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Black Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Hispanic Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">LGBTQ Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Native American Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Veteran Owned</p>
              </div>
              <div className="flex gap-4 mt-1 items-center ">
                <input type="checkbox" className="mt-1  " />

                <p className="text ">Woman Owned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
