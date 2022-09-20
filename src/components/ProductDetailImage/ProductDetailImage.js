import React from "react";
import style from "./ProductDetailImage.module.css";
import img1 from "../../assets/images/productDetail/1.png";
import img2 from "../../assets/images/productDetail/2.png";
import img3 from "../../assets/images/productDetail/3.png";
import img4 from "../../assets/images/productDetail/4.png";

const ProductDetailImage = () => {
  return (
    <>
      <div className="col-6 mb-4">
        <div className={style.imgDetail}>
          <img src={img1} alt="detail" />
        </div>
      </div>
      <div className="col-6 mb-4">
        <div className={style.imgDetail}>
          <img src={img2} alt="detail" />
        </div>
      </div>
      <div className="col-6 mb-4">
        <div className={style.imgDetail}>
          <img src={img3} alt="detail" />
        </div>
      </div>
      <div className="col-6 mb-4">
        <div className={style.imgDetail}>
          <img src={img4} alt="detail" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailImage;
