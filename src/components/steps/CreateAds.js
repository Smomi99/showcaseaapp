import React from "react";
import plus from '../../assets/plus.png';
import { useStepperContext } from "../../contexts/StepperContext";
const CreateAds = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl mb-2">Create your first ad</h1>
        <p className="text-gray-500">
          Tell the world about your amazing service!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Add title
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["title"] || ""}
              name="title"
              placeholder="Title"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Select Category
          </div>
          <div className=" flex rounded mt-2  border-gray-200 bg-white ">
            <div class="flex justify-center">
              <div class=" xl:w-64 md:w-64">
                <select
                  class="form-select border  appearance-none block w-64 h-11 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select </option>
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
            Postal Code
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["zip"] || ""}
              name="zip"
              placeholder="ZIP"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div>
          <h1 className="text-md font-bold">Add Images / Videos (8 max)</h1>
          <div class="flex justify-starts mt-8">
            <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
              <div class="m-4">
                <div class="flex items-center justify-start w-full">
                  <label class="flex flex-col w-24 h-18 hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                     <img src={plus} alt="" />
  
                    </div>
                    <input type="file" class="opacity-0" />
                  </label>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="textarea mt-4 mb-2">

      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
<textarea id="message" rows="4" class="block h-64 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Is this offered virtually?
          </div>
          <div className=" flex rounded mt-2  border-gray-200 bg-white ">
            <div class="flex justify-center">
              <div class=" xl:w-64 md:w-64">
                <select
                  class="form-select border  appearance-none block w-64 h-11 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select </option>
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
            Enabled contact by email on post?
          </div>
          <div className=" flex rounded mt-2  border-gray-200 bg-white ">
            <div class="flex justify-center">
              <div class=" xl:w-64 md:w-64">
                <select
                  class="form-select border  appearance-none block w-64 h-11 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option selected>select </option>
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
};

export default CreateAds;
