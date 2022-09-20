import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import category1 from "../../assets/images/Group 1314.png";
import category2 from "../../assets/images/Group 1313.png";
import category3 from "../../assets/images/Group 1312.png";
import category4 from "../../assets/images/Group 1311.png";
import category5 from "../../assets/images/Group 1310.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./CategoriesCarousel.module.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function CategoriesCarousel() {
  return (
    <>
      <div className="container">
        <div className="row">
          <span className={style.headlineCategory}>Category</span>
        </div>
        <div className="row">
          <span className="p-0 text-secondary mb-3">
            What are you currently looking for
          </span>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={style.swiper}
      >
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={category1} alt="promotions" />
            <div className={style.cardText}>Shoes</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={category2} alt="promotions" />
            <div className={style.cardText}>Shorts</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={category3} alt="promotions" />
            <div className={style.cardText}>Jacket</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={category4} alt="promotions" />
            <div className={style.cardText}>Pants</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={category5} alt="promotions" />
            <div className={style.cardText}>T-shirt</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
