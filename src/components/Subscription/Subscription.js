import React from "react";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div className="fixed p-4 overflow-x-hidden  overflow-y-auto h-screen ">
      <div className="showcase font-bold text-white text-center p-6 text-lg mb-4">
        <h1>Showcase your services to your local audience!</h1>
        <h1 className="mt-4">Sign up today 🎉</h1>
      </div>
      <hr className="mt-12 mb-12" />
      <div className="mb-32">
        <h1 className="mb-4 font-bold">
          💌 Get the best of Showcase, directly to your inbox
        </h1>{" "}
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter email address"
        />
        <div className=" flex justify-center mt-4">
          <button class="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Subscriptions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
