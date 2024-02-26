import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide4.jpg";

const Category = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-4xl font-bold">Categories</div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"
      >
        <SwiperSlide>
          <div className="relative mb-12">
            <img src={slide1} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              Salads
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-12">
            <img src={slide1} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              pizzas
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-12">
            <img src={slide1} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              Soups
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-12">
            <img src={slide1} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              desserts
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative mb-12">
            <img src={slide1} alt="" />
            <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl uppercase text-white">
              Salads
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
