import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Carousel.css";

// import Swiper core and required modules

export const CarouselComponent = () => {
  return (
    <>
      <Swiper
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        spaceBetween={50}
        pagination={true}
        autoplay={{
          delay: 10000,
        }}
      >
        <SwiperSlide>
          <div className="slider-img"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
