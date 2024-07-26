import React from "react";
import { offerstoo } from "../constants";

const OfferTo = () => {
  return (
    <div className="flex px-1 space-x-1 mt-5 mx-2">
      {offerstoo.map((value) => (
        <div key={value.id} className="">
          <img src={value.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default OfferTo;
