import React from 'react';

const SearchBar = () => {
    return (
        <form className="flex items-center mx-auto pt-10 w-3/5"> {/* Center aligned in flex and added padding from the top, covering 60% of the flex */}
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css" rel="stylesheet"/>

            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                    </svg>
                </div>
                <input type="text" id="simple-search" className="bg-transparent border border-gray-500 text-white text-sm rounded-lg block w-full pl-10 py-2.5 pr-2.5 " placeholder="Search Game name..." required />
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-purple-700 hover:bg-purple-900 transition duration-300 ease-in-out rounded-lg  border ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

export default SearchBar;
