import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Smartphones } from "../constants";
import { FiChevronRight } from "react-icons/fi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { fashion } from "../constants/index";

const Fashion = () => {
  return (
    <div className="mt-5 bg-white py-4 md:mx-3">
      <div className=" capitalize font-semibold text-[17px] px-4 flex items-center justify-between md:text-xl  ">
        <span>top deals on fashion</span>
        <IoIosArrowDroprightCircle size={26} className=" text-blue-600 " />
      </div>
      <div className="hidden md:block  mt-4">
        <Swiper slidesPerView={5}>
          {fashion.map((value) => (
            <SwiperSlide key={value.id}>
              <Link>
                <div className=" rounded-sm border border-black/10 flex flex-col justify-center items-center   px-3 md:ml-3 py-2 ">
                  <img src={value.img} alt="" className="p-2" />
                  <h1 className="text-center text-xs">{value.name}</h1>
                  <h3 className="text-center text-sm  capitalize font-semibold">
                    {value.price}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden p-5 space-y-5">
        {fashion.map((value) => (
          <div key={value.id} className="space-y-3">
            <Link>
              <div className="flex items-center justify-between   ">
                <div className="flex items-center">
                  <img src={value.img} alt="" className="w-[50px]" />
                  <div className="text-sm ml-4">
                    <h1 className="font-semibold">{value.name}</h1>
                    <h3 className=" capitalize text-[12px] text-slate-400">
                      {value.price}
                    </h3>
                  </div>
                </div>

                <FiChevronRight />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
