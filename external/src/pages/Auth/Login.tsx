import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../../context/auth/context";

function Login() {
    const { setLogIn } = useAuthContext();
  const facebookId = "857857778825704";
  const FacebookResponse = (res: any) => {
    console.log("fb res", res);
  };

  // google login
  const googleSuccess = (res: any) => {
    var decoded:any = jwt_decode(res.credential);
    // console.log(decoded);
    setLogIn(decoded.email,decoded.name,decoded.picture)
  };
  return (
    <div className="main-wrap">
      <div className="nav-header bg-transparent shadow-none border-0">
        <div className="nav-top w-100">
          <Link to="/" className="pl-4">
            {/* <i className="feather-zap text-success display2-size me-3 ms-0"></i> */}
            <span className="text-white pl-4 d-inline-block fredoka-font ls-3 fw-600 font-xxl logo-text mb-0">
              Rivall
            </span>
          </Link>

          <button className="nav-menu me-0 ms-auto"></button>

          <Link
            to="/login"
            className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="header-btn d-none d-lg-block border-slate-800 fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl"
            style={{ border: "1px solid white" }}
          >
            Register
          </Link>
        </div>
      </div>

      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="row">
        <div
          className="col-xl-12 vh-100 align-items-center d-flex  rounded-3 overflow-hidden"
          style={{ background: "rgb(16 16 16 / 28%)" }}
        >
          <div
            className="card shadow-none border-0 ms-auto me-auto login-card"
            style={{ background: "transparent" }}
          >
            <div
              className="card-body rounded-0 text-left"
              style={{ background: "transparent" }}
            >
              <h2 className="fw-700 display1-size display2-md-size mb-3 text-white">
                Login
              </h2>
              <form>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pe-0"></i>
                  <input
                    type="text"
                    className="text-white style2-input ps-5 form-control font-xsss fw-600"
                    placeholder="Your Email Address"
                    style={{ background: "transparent" }}
                  />
                </div>
                <div className="form-group icon-input mb-1">
                  <input
                    type="Password"
                    className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3"
                    placeholder="Password"
                    style={{ background: "transparent" }}
                  />
                  <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                </div>
                <div className="form-check text-left mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck5"
                  />
                  <label className="form-check-label font-xsss text-white mt-1">
                    Remember me
                  </label>
                  <a
                    href="/forgot"
                    className="fw-600 font-xsss text-white mt-1 float-right"
                  >
                    Forgot your Password?
                  </a>
                </div>
              </form>

              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <a
                    href="/login"
                    className="form-control text-center mt-[10px] style-input text-dark fw-600 bg-white border-0 p-0 "
                  >
                    Login
                  </a>
                </div>
                <h6 className="text-white font-xsss fw-500 mt-0 mb-0 lh-32 text-center">
                  Dont have account{" "}
                  <a href="/register" className="fw-700 ms-1">
                    Register
                  </a>
                </h6>
              </div>
              <div className="col-sm-12 p-0 text-center mt-2">
                {/* <h6 className="mb-0 d-inline-block bg_white fw-500 font-xsss text-grey-500 mb-3">Or, Sign in with your social account </h6> */}
                <div className="flex gap-4 justify-center">
                  <div className="flex">
                    <FacebookLogin
                      appId={facebookId}
                      autoLoad={false}
                      cssClass="w-[3rem] h-[3rem] text-[0px]  absolute self-center"
                      fields="name,email,picture"
                      callback={FacebookResponse}
                    />
                    <img
                      src="assets/icon/facebook.png"
                      alt="icon"
                      className="ms-2 w40  "
                    />
                  </div>

                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        googleSuccess(credentialResponse);
                      }}
                      
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      type={'icon'}
                    />
                    {/* <img
                      src="assets/icon/google.png"
                      alt="icon"
                      className=" w40 "
                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
