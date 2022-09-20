import React from "react";
import style from "./Register.module.css";
import logo from "../../../assets/images/blanja.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div
          className={`row justify-content-center align-items-center ${style.heightWrapper}`}
        >
          <div className="col-md-4">
            <div className="row text-center">
              <div>
                <div className={style.logo}>
                  <img src={logo} alt="logo" />
                </div>
                <div className="text-center mt-4">
                  <h5 className="fw-bolder">
                    Please sign up with your account
                  </h5>
                </div>
                <div
                  className="btn-group mt-4"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    defaultChecked
                  />
                  <label className="btn btn-outline-danger" htmlFor="btnradio1">
                    Customer
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-danger" htmlFor="btnradio3">
                    Seller
                  </label>
                </div>
                <form>
                  <div className="row mt-4">
                    <div className="container">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="container">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="container">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Store name"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="container">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        autoComplete="on"
                      />
                    </div>
                  </div>

                  <div className="d-grid mt-4">
                    <button
                      className="btn btn-danger btn-lg rounded-pill"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="mt-4">
                  Already have a Tokopedia account?{" "}
                  <span
                    className={`text-danger ${style.pointer}`}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
