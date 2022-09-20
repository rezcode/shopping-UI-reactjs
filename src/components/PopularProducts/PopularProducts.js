import React from "react";
import style from "./PopularProducts.module.css";
import products from "../../dummyData/products";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PopularProducts = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <span className={style.headlinePopular}>Popular</span>
        </div>
        <div className="row">
          <span className="p-0 text-secondary mb-3">
            You’ve never seen it before!
          </span>
        </div>
      </div>
      <div className="row justify-content-center">
        {products?.map((item, index) => (
          <div className="col" key={index}>
            <div
              className={`card ${style.cardProduct}`}
              onClick={() => navigate("/product-detail")}
            >
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title mb-1">{item.title}</h5>
                <p className="card-text mb-1">{item.category}</p>
                <p className="text-secondary mb-1">{item.store}</p>
                <div>
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <span className="text-secondary">({item.totalReviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularProducts;
