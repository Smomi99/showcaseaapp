import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav class="grid lg:grid-cols-4 md:grid-cols-3 w-full fixed top-0 bg-white  items-center flex-wrap border-b-2  p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a
          className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
          href="#pablo"
        >
          <img className="w-48" src={logo} alt="" />
        </a>
      </div>
      <div class="text-sm lg:flex-grow lg:col-span-2">
        <form class="flex items-center w-4/5" >
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
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
            />
          </div>
        </form>
      </div>
      <div class="w-full flex lg:justify-end md:justify-end lg:items-center lg:w-auto">
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none  rounded text-gray-600 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            sign in
          </a>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
