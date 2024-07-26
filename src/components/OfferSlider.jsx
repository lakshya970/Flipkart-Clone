import React from "react";
import { offers } from "../constants";
import { Link } from "react-router-dom";

const OfferSlider = () => {
  return (
    <div className="flex overflow-x-auto gap-4 pl-5 scrollbar-hide md:px-5 bg-white md:my-2 md:mx-3 shadow-sm ">
      {offers.map((value) => (
        <div
          key={value.id}
          className="py-5 mt-1 px-2 flex flex-col items-center md:w-[100vw] "
        >
          <Link to={value.to}>
            {" "}
            <div className="w-[65px]">
              <img
                src={value.img}
                alt=""
                className="w-[200px] aspect-square "
              />
            </div>
            <h2 className="text-xs text-balance mt-2 capitalize font-light text-center md:text-sm font-medium">
              {value.name}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OfferSlider;
