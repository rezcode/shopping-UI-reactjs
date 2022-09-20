import React from "react";
import style from "./Login.module.css";
import logo from "../../../assets/images/blanja.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
                  <h5 className="fw-bolder">Please login with your account</h5>
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
                        type="text"
                        placeholder="Email"
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
                  <div className="text-end mt-4">
                    <p className="text-danger">Forgot password?</p>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-danger btn-lg rounded-pill"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <p className="mt-4">
                    Don't have a Tokopedia account?{" "}
                    <span
                      className={`text-danger ${style.pointer}`}
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
