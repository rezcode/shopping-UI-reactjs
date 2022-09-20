import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import promoImg1 from "../../assets/images/Mask Group (1).png";
import promoImg2 from "../../assets/images/Mask Group.png";
import promoImg3 from "../../assets/images/jonathan-francisca-565369-unsplash-600x400.jpeg";
import promoImg4 from "../../assets/images/photo-1503342452485-86b7f54527ef.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./PromotionCarousel.module.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function PromotionCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={2}
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
            <img src={promoImg4} alt="promotions" />
            <div className={style.cardText}>Casuals</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={promoImg2} alt="promotions" />
            <div className={style.cardText}>Trends in 2020</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={promoImg1} alt="promotions" />
            <div className={style.cardText}>Black edition</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.cardImg}>
            <img src={promoImg3} alt="promotions" />
            <div className={style.cardText}>Formal</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
