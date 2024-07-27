import React from "react";

const SearchTickets = () => {
  return (
    <div className="max-h-[350px] max-w-[1300px] border solid-border border-black rounded-lg pl-9 pt-2 bg-white">
      <form className="flex items-center gap-4 text-gray-600">
        <div className="flex gap-1">
          <input id="one" type="radio" />
          <label className="hover:text-black" htmlFor="one">
            One Way
          </label>
        </div>
        <div className="flex gap-1">
          <input type="radio" id="round" checked className="hover:text-black" />
          <label className="text-black" htmlFor="round">
            Round Trip
          </label>
        </div>
        <div className="flex gap-1">
          <input type="radio" id="multi" />
          <label className="hover:text-blac" htmlFor="multi">
            Multi City
          </label>
        </div>
      </form>

      <div className="flex gap-3 ">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};

export default SearchTickets;
