import React, { useState } from 'react';

const SearchBar = props => {
  const onChangeHandler = e => {
    props.setsearch(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-1 md:flex-none justify-end">
        <div className="w-full max-w-sm relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
            placeholder="Search products..."
            type="text"
            value={props.search}
            onChange={e => {
              onChangeHandler(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
