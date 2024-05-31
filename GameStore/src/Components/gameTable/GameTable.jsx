import React from 'react';
import { IoEye } from "react-icons/io5";

const GameTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 mt-20">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-darkgray">
          <tr>
            <th scope="col" className="px-6 py-3">
              Game name
            </th>
            <th scope="col" className="px-6 py-3">
              Preview
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-buttongray border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
              Call of duty 4
            </th>
            <td className="px-6 py-4 font-medium text-gray-200">
						<IoEye />
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              Shooting
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              $2999
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Edit</a>
            </td>
          </tr>
          <tr className="bg-buttongray border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
              Minecraft
            </th>
            <td className="px-6 py-4 font-medium text-gray-200">
						<IoEye />
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              Open World
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              $2999
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Edit</a>
            </td>
          </tr>
					<tr className="bg-buttongray border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
              Far Cry 5
            </th>
            <td className="px-6 py-4 font-medium text-gray-200">
						<IoEye />
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              Open World
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              $2999
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Edit</a>
            </td>
          </tr>
          <tr className="bg-buttongray border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
              Game for Peace
            </th>
            <td className="px-6 py-4 font-medium text-gray-200">
						<IoEye />
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              Battle Royale
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              $2999
            </td>
            <td className="px-6 py-4 font-medium text-gray-200">
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Edit</a>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;
