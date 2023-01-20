import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import Logo from "../../images/logo.png";
import FacebookLogin from "react-facebook-login";
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../../context/auth/context";

function Register() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [nextPressed, setNextPressed] = useState(false);
  const { setLogIn } = useAuthContext();
  const facebookId = "857857778825704";
  const FacebookResponse = (res: any) => {
    console.log("fb res", res);
  };
  const handleVendor = (res:any)=>{
    let {name, value} = res.target;
    // console.log('name:',name,'Value:',value)
    setType(value)
  }

  // google login
  const googleSuccess = (res: any) => {
    var decoded: any = jwt_decode(res.credential);
    // console.log(decoded);
    setLogIn(decoded.email, decoded.name, decoded.picture);
  };
  const checkVendor =()=>{
    if(type === '3'){
      if(nextPressed){
        navigate("/login");
      }else{
        setNextPressed(true)
      }
    }else{
      navigate("/login");
    }
  }
  const RenderForm = () => {
    if (nextPressed)
      return (
        <div>
          <form>
            <div className="form-group icon-input mb-3">
              <i className="font-sm ti-user text-grey-500 pe-0"></i>
              <input
                type="text"
                className="text-white style2-input ps-5 form-control font-xsss fw-600"
                placeholder="Your Full Name"
                style={{ background: "transparent" }}
              />
            </div>
            <div className="form-group icon-input mb-3">
              <input
                type="text"
                className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3"
                placeholder="Your Shop Name"
                style={{ background: "transparent" }}
              />
              <i className="font-sm ti-briefcase text-grey-500 pe-0"></i>
            </div>
            <div className="form-group icon-input mb-3">
              <input
                type="text"
                className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3"
                placeholder="Shop URL"
                style={{ background: "transparent" }}
              />
              <i className="font-sm ti-link text-grey-500 pe-0"></i>
            </div>
            <div className="form-group icon-input mb-1">
              {/* <input type="Password" className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3" placeholder="Confirm Password" style={{background:'transparent'}}/> */}
              <input
                type="tel"
                className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3"
                placeholder="Your Phone Number"
                style={{ background: "transparent" }}
              />
              <i className="font-sm ti-mobile text-grey-500 pe-0"></i>
            </div>
          </form>
        </div>
      );
    else
      return (
        <div>
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
            <div className="form-group icon-input mb-3">
              <input
                type="Password"
                className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3"
                placeholder="Password"
                style={{ background: "transparent" }}
              />
              <i className="font-sm ti-lock text-grey-500 pe-0"></i>
            </div>
            <div className="form-group icon-input mb-3">
              <input
                type="Password"
                className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3"
                placeholder="Confirm Password"
                style={{ background: "transparent" }}
              />
              <i className="font-sm ti-lock text-grey-500 pe-0"></i>
            </div>
            <div className="form-group icon-input mb-1">
              {/* <input type="Password" className="mt-1 text-white style2-input ps-5 form-control font-xss ls-3" placeholder="Confirm Password" style={{background:'transparent'}}/> */}
              <select
              value={type}
                onChange={handleVendor}
                className="w-full pd-[60px] pl-[45px] pr-[50px] h-[58px] bg-transparent text-white font-semibold"
                style={{ border: "2px solid white", borderRadius: "8px" }}
              >
                <option value="1">User Type</option>
                <option value="2">Customer</option>
                <option value="3">Vendor</option>
              </select>
              <i className="font-sm ti-user text-grey-500 pe-0"></i>
            </div>
          </form>
        </div>
      );
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
                Register
              </h2>
              <RenderForm />

              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <button
                    onClick={()=> checkVendor()}
                    className="form-control text-center mt-[10px] style-input text-dark fw-600 bg-white border-0 p-0 "
                  >
                    {type === "3" ? nextPressed ? "Register" : "Next" : "Register"}
                  </button>
                </div>
                <h6 className="text-white font-xsss fw-500 mt-0 mb-0 lh-32 text-center">
                  If you have an account{" "}
                  <a href="/login" className="fw-700 ms-1">
                    Login
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
                    type={"icon"}
                  />
                  {/* <button onClick={() => googleLogin()}>
                    <img
                      src="assets/icon/google.png"
                      alt="icon"
                      className=" w40 "
                    />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
