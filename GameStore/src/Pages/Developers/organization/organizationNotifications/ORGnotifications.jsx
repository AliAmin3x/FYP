import React from "react";
import Dlayout from "../../DeveloperLayout/Dlayout";

function ORGnotifications() {
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
            Organization's Notifications
          </h1>

          <div
            className="items-left w-full flex justify-center items-center md:w-auto md:order-1 pr-10"
            id="navbar-user"
          >
            <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/organization-notifications"
                  className="block py-2 px-4 mx-8 mt-20 w-auto rounded-md md:bg-transparent md:p-0 text-white transition-colors duration-300 ease-in-out"
                  aria-current="page"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="/organization-type"
                  className="block py-2 px-4 mx-8 mt-20 w-auto text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Type
                </a>
              </li>
              <li>
                <a
                  href="/organization-settings"
                  className="block py-2 px-4 mx-8 mt-20 w-auto text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 mx-20">
            <table className="w-full text-sm text-left rtl:text-right text-white">
              <thead className="text-xs text-white uppercase bg-darkgray ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 w-full">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-buttongray border-b hover:bg-buttongray2 transition-colors duration-300 ease-in-out">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-gray-200 whitespace-nowrap dark:text-white"
                  >
                    Game Update
                  </th>
                  <td className="px-6 py-4 w-full">Game has been Updated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dlayout>
  );
}

export default ORGnotifications;
