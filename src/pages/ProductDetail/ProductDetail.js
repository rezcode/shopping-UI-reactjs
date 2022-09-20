import React from "react";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import ProductDetailImage from "../../components/ProductDetailImage/ProductDetailImage";
import ProductDetailInformation from "../../components/ProductDetailInformation/ProductDetailInformation";
import ProductDetailPicker from "../../components/ProductDetailPicker/ProductDetailPicker";
import style from "./ProductDetail.module.css";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <nav className={style.breadcrumb} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item" onClick={() => navigate("/")}>
                Home
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Category
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shoes
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row mt-4">
              <ProductDetailImage />
            </div>
          </div>
          <div className="col-md-6">
            <div className="row mt-4">
              <ProductDetailPicker />
            </div>
          </div>
        </div>
        <ProductDetailInformation />
        <hr />
        <div className="row mt-5">
          <h2>You can also like this</h2>
          <p className="text-muted">You’ve never seen it before!</p>
          <div className="mt5">
            <PopularProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
