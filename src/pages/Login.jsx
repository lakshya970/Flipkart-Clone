import React from "react";

const Login = () => {
  return (
    <div className="container px-4 mt-5 space-y-8 sm:max-w-[30rem] sm:m-auto sm:mt-8 sm:border border-gray-300 sm:rounded-xl sm:py-6 sm:px-10 md:py-10 md:mt-8 lg:space-y-9 lg:mt-8 bg-white shadow-md">
      <div className="max-w-20 m-auto">
        <img src="youtube.png" alt="" />
      </div>
      <div className="sing ">
        <p className="text-center text-xl lg:text-2xl">Sign in</p>
        <p className="text-center">to continue to flipkart</p>
      </div>
      <div className="space-y-2">
        <div className=" border border-gray-300 rounded-sm lg:rounded-md">
          <input
            className="max-h-full m-auto py-2  text-gray-500 px-3 md:my-2 focus:outline-none "
            type="email"
            placeholder="Email or phone"
          />
        </div>
        <div>
          <p className="text-sm text-blue-600 font-medium">Forgot email?</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-700">
          Not your computer? Use Guest mode to sign in privately.
        </p>
        <p className="text-sm text-blue-600 font-medium">
          <a href="">Learn more</a>
        </p>
      </div>
      <div className="btn flex justify-between">
        <button className="text-blue-500 font-medium py-2 hover:bg-blue-50">
          Create account
        </button>
        <button className="bg-blue-500 px-5 py-2 rounded-md text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Login;
