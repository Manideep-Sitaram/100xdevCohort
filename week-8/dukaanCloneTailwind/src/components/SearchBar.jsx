import React from "react";

function SearchBar() {
  return (
    <div className="flex">
      <div className="pr-2 flex flex-col justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search feature"
          classsName="text-xs px-6 text-gray-500 w-full py-2 placeholder:text-sm"
        />
      </div>
    </div>
  );
}

export default SearchBar;
