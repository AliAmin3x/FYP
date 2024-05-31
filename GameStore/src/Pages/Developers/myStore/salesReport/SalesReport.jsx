import React from "react";
import Dlayout from "../../DeveloperLayout/Dlayout";
import { HiOutlineDownload } from "react-icons/hi";

function SalesReport() {
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

            <li className="bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/organization-type"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                Organization
              </a>
            </li>

            <li className="bg-buttongray2 w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
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
            MyStore
          </h1>
          <h2 className="font-roboto text-3xl px-8 py-1 mt-10 font-bold text-white">
            Revenue
          </h2>
          <div
            className=" font-bold w-full flex justify-center items-center md:w-auto md:order-1 pr-10"
            id="option-bar"
          >
            <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/sales-report"
                  className="block py-2 px-4 mx-8 mt-20 w-auto rounded-md md:bg-transparent md:p-0 text-white transition-colors duration-300 ease-in-out"
                  aria-current="page"
                >
                  Sales Report
                </a>
              </li>
              <li>
                <a
                  href="/revenue"
                  className="block py-2 px-4 mx-8 mt-20 w-auto text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  Revenue
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 mt-20">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs w-full text-white uppercase bg-darkgray">
                <tr>
                  <th scope="col" className="px-6 py-3 w-auto">
                    Game name
                  </th>
                  <th scope="col" className="px-6 py-3 w-auto">
                    Publish Date
                  </th>
                  <th scope="col" className="px-6 py-3 w-auto">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 w-auto">
                    Total Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-buttongray border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap"
                  >
                    Call of duty 4
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-200">
                    18/09/2021
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-200">$2999</td>
                  <td className="px-6 py-4 font-medium text-gray-200">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full mx-20 mt-5">
            <HiOutlineDownload className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    </Dlayout>
  );
}

export default SalesReport;
