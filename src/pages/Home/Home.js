import React from "react";
import CategoriesCarousel from "../../components/CategoriesCarousel/CategoriesCarousel";
import NewProducts from "../../components/NewProducts/NewProducts";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import PromotionCarousel from "../../components/PromotionCarousel/PromotionCarousel";

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <PromotionCarousel />
        <div className="mt-5">
          <CategoriesCarousel />
        </div>
        <div className="mt-5">
          <NewProducts />
        </div>
        <div className="mt-5">
          <PopularProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
