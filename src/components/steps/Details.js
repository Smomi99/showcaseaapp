import { useStepperContext } from "../../contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl mb-2">Business details</h1>
        <p className="text-gray-500">Lets set up your business profile</p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Company Logo
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["name"] || ""}
              name="name"
              placeholder="name"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Company
          </div>
          <div className="my-2  flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["company"] || ""}
              name="company"
              placeholder="Company name"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Service Category
          </div>
          <div className="my-2 flex rounded  border-gray-200 bg-white p-1">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-64 md:w-64">
                <select
                  class="form-select border appearance-none block w-64 h-12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select menu </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            City / Metro area
          </div>
          <div className="my-2 flex rounded  border-gray-200 bg-white p-1">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-64 md:w-64">
                <select
                  class="form-select border appearance-none block w-64 h-12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select menu </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
