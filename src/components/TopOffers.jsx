import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { offerSlider } from "../constants";
import sbi from "../assets/sbi.webp";

const TopOffers = () => {
  return (
    <>
      <main>
        <div className="hidden md:block md:px-3 my-3">
          <Swiper
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            pagination={{ dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {offerSlider.map((value) => (
              <SwiperSlide key={value.id}>
                <img src={value.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" md:hidden  my-3">
          <Swiper
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            modules={[Autoplay]}
          >
            {offerSlider.map((value) => (
              <SwiperSlide key={value.id}>
                <img src={value.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
      <div>
        <img src={sbi} alt="" />
      </div>
    </>
  );
};

export default TopOffers;
