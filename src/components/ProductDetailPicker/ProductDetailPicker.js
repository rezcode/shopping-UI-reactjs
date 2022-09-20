import React from "react";
import { AiFillStar } from "react-icons/ai";
import style from "./ProductDetailPicker.module.css";

const ProductDetailPicker = () => {
  return (
    <>
      <div>
        <p className={style.title}>Nike CruzrOne (Bright Crimson)</p>
        <span className="text-muted">Nike</span>
        <p>
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <AiFillStar size={20} color="#FFBA49" />
          <span className="text-secondary">(10)</span>
        </p>
      </div>
      <div>
        <p className="text-muted m-0">Price</p>
        <p className={style.price}>$ 20.0</p>
      </div>
      <div>
        <p className="mb-1">Color</p>
        <p>
          <svg height={40} width={40}>
            <circle cx={18} cy={18} r={15} fill="black" />
          </svg>
          <svg height={40} width={40}>
            <circle cx={18} cy={18} r={15} fill="#D84242" />
          </svg>
          <svg height={40} width={40}>
            <circle cx={18} cy={18} r={15} fill="#4290D8" />
          </svg>
          <svg height={40} width={40}>
            <circle cx={18} cy={18} r={15} fill="#42D86C" />
          </svg>
        </p>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="mb-1">Size</p>
          <p>
            <button
              type="button"
              className={`btn btn-secondary rounded-circle ${style.buttonMin}`}
            >
              -
            </button>
            <span> 28 </span>
            <button
              type="button"
              className={`btn btn-outline-light rounded-circle ${style.buttonPlus}`}
            >
              +
            </button>
          </p>
        </div>
        <div className="col-6">
          <p className="mb-1">Jumlah</p>
          <p>
            <button
              type="button"
              className={`btn btn-secondary rounded-circle ${style.buttonMin}`}
            >
              -
            </button>
            <span> 1 </span>
            <button
              type="button"
              className={`btn btn-outline-light rounded-circle ${style.buttonPlus}`}
            >
              +
            </button>
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-outline-secondary rounded-pill"
            >
              Chat
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-outline-secondary rounded-pill"
            >
              Add bag
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-8">
          <div className="d-grid">
            <button type="button" className="btn btn-danger rounded-pill">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPicker;
