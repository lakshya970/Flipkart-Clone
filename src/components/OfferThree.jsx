import React from "react";
import { offerthree } from "../constants/index";

const OfferThree = () => {
  return (
    <div className="mx-2 flex my-2 space-x-1">
      {offerthree.map((value) => (
        <div key={value.id} className=" ">
          <img src={value.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default OfferThree;
