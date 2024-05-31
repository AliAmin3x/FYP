import React, { useState, useEffect, useRef } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-lightgray border-gray-200">
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="flex items-center justify-between mx-auto p-4">
        <a
          href="/home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5cf8130805d9b0000136bfff/1564690241772-WNZBV9YZE64SOOX04EUN/nalogo-white.png?format=1500w"
            className="h-8"
            alt="NexGen Arcade Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NexGen Arcade
          </span>
        </a>

        <div className="flex items-right justify-end md:order-2  space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <a
            href="/cart"
            className="text-buttons flex justify-center items-center transition-colors duration-300 ease-in-out"
          >
            <LuShoppingCart className="w-7 h-7 stroke-current text-gray-400  hover:text-white transition duration-300 ease-in-out" />
          </a>
          <div className="px-3"></div>
          <a
            href="/favourites"
            className="text-buttons flex justify-center items-center transition-colors duration-300 ease-in-out"
          >
            <LuHeart className="w-7 h-7 stroke-current text-gray-400  hover:text-white transition duration-300 ease-in-out" />
          </a>
          <div className="px-3"></div>
          <div className="items-left pl-1">
            <a type="button" className="flex text-sm" onClick={toggleDropdown}>
              <span className="sr-only">Open user menu</span>
              <FaRegCircleUser className="w-9 h-9 stroke-current text-buttons hover:text-white transition duration-300 ease-in-out" />
            </a>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 top-full mt-1 bg-lightgray divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-50"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-50 dark:text-white">
                    Ali Amin
                  </span>
                  <span className="block text-sm text-gray-400 truncate dark:text-gray-400">
                    ali.qwerty32a0@gmai.com
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <a
                      href="/accountsettings"
                      className=" px-4 py-2 text-sm text-white flex justify-center hover:bg-buttongray hover:text-white transition duration-300 ease-in-out"
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="notifications"
                      className="flex justify-center px-4 py-2 text-sm text-white hover:bg-buttongray hover:text-white transition duration-300 ease-in-out"
                    >
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="/developersignup"
                      className="flex justify-center px-4 py-2 text-sm text-white hover:bg-buttongray hover:text-white transition duration-300 ease-in-out"
                    >
                      Sign Up for Developer
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className="flex justify-center px-4 py-2 text-sm text-white hover:bg-buttongray hover:text-white transition duration-300 ease-in-out"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div
          className="items-left w-full flex justify-center items-center md:w-auto md:order-1 pr-10"
          id="navbar-user"
        >
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 border bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/home"
                className="block py-2 px-4 w-20 text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
                aria-current="page"
              >
                Store
              </a>
            </li>
            <li>
              <a
                href="/discover"
                className="block py-2 px-4 w-20 text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="/library"
                className="block py-2 px-4 w-20 text-buttons rounded-md md:bg-transparent md:p-0 hover:text-white transition-colors duration-300 ease-in-out"
              >
                Library
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
