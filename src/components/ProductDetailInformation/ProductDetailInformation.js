import React from "react";
import { AiFillStar } from "react-icons/ai";
import style from "./ProductDetailInformation.module.css";

const ProductDetailInformation = () => {
  return (
    <>
      <div className="row mt-4">
        <h3>Informasi Produk</h3>
      </div>
      <div className="row mt-4">
        <h5 className="mb-1">Condition</h5>
        <p className="text-danger">New</p>
        <h5>Description</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
          laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
          imperdiet ac ac felis. Etiam tincidunt tristique placerat.
          Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris
          <br /> <br />
          vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at,
          ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu,
          sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
          sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum
          tempus. Mauris vel molestie orci.
        </p>
        <h3 className="mt-3">Product review</h3>
        <div className="row mb-4">
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <span className={style.rating}>5.0</span>
                <span className="text-muted">/10</span>
                <p>
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                  <AiFillStar size={20} color="#FFBA49" />
                </p>
              </div>
              <div className="col-2 text-center">
                <AiFillStar size={20} color="#FFBA49" /> 5 <br />
                <AiFillStar size={20} color="#FFBA49" /> 4 <br />
                <AiFillStar size={20} color="#FFBA49" /> 3 <br />
                <AiFillStar size={20} color="#FFBA49" /> 2 <br />
                <AiFillStar size={20} color="#FFBA49" /> 1 <br />
              </div>
              <div className="col-4">
                <hr className={style.ratingLine} />
              </div>
              <div className="col-2 text-center">
                <span>4</span> <br />
                <span>0</span> <br />
                <span>0</span> <br />
                <span>0</span> <br />
                <span>0</span> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailInformation;
