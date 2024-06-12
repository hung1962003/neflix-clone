// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="carousel"
      >
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/original/xpba0Dxz3sxV3QgYLR8UIe1LAAX.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/original/j7FL6KfjEjrGSXt6peQw7U3VL0R.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/original/8rK0S1ZWmfF4EqVabdqB9PMIFTS.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
