import React from "react";
import { Link } from "react-router-dom";
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
        <form class="flex items-center w-4/5">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          {/* search  */}
        </form>
      </div>
      <div class="w-full flex lg:justify-end md:justify-end lg:items-center lg:w-auto">
        <div>
          <Link
            to="/login"
            class="inline-block text-sm px-4 py-2 leading-none  rounded text-gray-600 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            sign in
          </Link>
        </div>
        <Link to="/signup">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
