import React from "react";
import logo from "../../assets/logo.png";
const SignIn = () => {
  return (
    <div className="mb-32">
      <div>
        <nav className="relative  flex flex-wrap items-center justify-between px-2  border-b-2 mb-12">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                <img className="object-contain	" src={logo} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="mt-8 mb-4 text-md text-center font-semibold ">
        <h1>Welcome to Showcase 👋</h1>
        <h1 className="text-gray-500 w-full  p-4">
          Create an account and start showcasing your <br />
          services to your local audience looking for talented pros!
        </h1>
      </div>
      <div className="mx-auto rounded-2xl bg-white pb-2 drop-shadow-2xl md:w-1/2">
        <div className="p-8">
          <h1 className="font-bold text-xl mb-2">Sign in</h1>
          <p className="text-gray-300 mb-6">
            Please enter your Showcase account email and password
          </p>
          <hr />
          <div className="flex justify-between gap-4 mb-4">
            <div className="w-full">
              <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 ">
                Email
              </div>
              <div className="my-2 flex  rounded border border-gray-200 bg-white p-1">
                <input
                  // onChange={handleChange}
                  // value={userData["email"] || ""}
                  name="email"
                  placeholder="email"
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 ">
                Password
              </div>
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <input
                  // onChange={handleChange}
                  // value={userData["email"] || ""}
                  name="password"
                  placeholder="password"
                  type="password"
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
            <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-1/2 mt-4">
        <div className=" flex justify-between ">
          <p>
            Don't have an account?{" "}
            <span className="text-blue-700">
              <a href="">Sign up</a>
            </span>
          </p>
          <p>
            <span className="text-blue-700">
              <a href="">Forgot password</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
