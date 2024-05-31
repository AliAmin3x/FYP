import React from "react";
import Dlayout from "../../DeveloperLayout/Dlayout";

function ORGsettings() {
  return (
    <Dlayout>
      <div className="pt-7 px-7 flex">
        <div className="bg-lightgray w-1/5 h-screen flex justify-center rounded-lg">
          <ul className="w-full px-2 font-bold">
            <li className="bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/dashboard"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                Dashboard
              </a>
            </li>

            <li className="bg-buttongray2 w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/organization-type"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                Organization
              </a>
            </li>

            <li className="bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/sales-report"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                MyStore
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-grow ml-7 bg-lightgray rounded-lg">
          <h1 className="font-roboto text-5xl px-8 py-10 font-bold text-white">
            Organization's Settings
          </h1>

          <div
            className=" font-bold w-full flex justify-center items-center md:w-auto md:order-1 pr-10"
            id="option-bar"
          >
            <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/organization-notifications"
                  className="block py-2 px-4 mx-8 mt-20 w-auto text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
                  aria-current="page"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="/organization-type"
                  className="block py-2 px-4 mx-8 mt-20 w-auto rounded-md text-buttons md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Type
                </a>
              </li>
              <li>
                <a
                  href="/organization-settings"
                  className="block py-2 px-4 mx-8 mt-20 w-auto rounded-md md:bg-transparent md:p-0 text-white transition-colors duration-300 ease-in-out"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="px-8 pt-10 pb-2">
            <h2 className="font-roboto text-3xl font-bold text-white">
              Change Password
            </h2>

            <input
              type="password"
              placeholder="Enter Your Password"
              className="mt-5 w-1/3 h-20 rounded-lg bg-buttongray2 outline-none text-white text-lg text-center placeholder-gray-300"
            />
          </div>
          <div className="px-8 py-2">
            <input
              type="password"
              placeholder="Enter Your New Password"
              className="mt-1 w-1/3 h-20 rounded-lg bg-buttongray2 outline-none text-white text-lg text-center placeholder-gray-300"
            />
          </div>
          <div className="px-8 py-2">
            <input
              type="password"
              placeholder="Confirm Your New Password"
              className="mt-1 w-1/3 h-20 rounded-lg bg-buttongray2 outline-none text-white text-lg text-center placeholder-gray-300"
            />
          </div>
          <div className="h-10 w-36 mx-8 my-10 bg-cosmicpurple hover:bg-purple2 flex outline-none justify-center items-center rounded-lg font-bold transition duration-300 ease-in-out">
            <button
              className=" text-white w-full h-full flex justify-center items-center "
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Dlayout>
  );
}

export default ORGsettings;
