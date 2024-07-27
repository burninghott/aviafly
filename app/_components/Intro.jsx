import Image from "next/image";
import React from "react";
import plane from "../../public/plane.png";
import SearchTickets from "./SearchTickets";

const Intro = () => {
  return (
    <div className="bg-primary relative">
      <div className="container flex flex-col text-center justify-center pt-12">
        <div className="flex justify-center mb-3">
          <div className="flex gap-5 bg-tab  text-white px-1 py-1 rounded-3xl mb-7">
            <button className="px-4 rounded-3xl hover:bg-white hover:text-primary">
              Airplane Ticket
            </button>
            <button className="px-4 rounded-3xl hover:bg-white hover:text-primary">
              Airplane Shuttle
            </button>
            <button className="px-4 rounded-3xl hover:bg-white hover:text-primary">
              Booking Hotel
            </button>
          </div>
        </div>
        <h1 className="text-white font-extrabold text-5xl mb-3">
          Take Flight <br /> With Ease!
        </h1>
        <Image
          src={plane}
          width={380}
          height={170}
          alt="plane"
          className="m-auto mb-6"
        />
      </div>
      <div>
        <div className="h-[500px] bg-secondary search-container"></div>
        <div className="absolute text-black z-50 top-[410px] left-0 right-0">
          <div className="container">
            <SearchTickets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
