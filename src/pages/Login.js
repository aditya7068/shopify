import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import image from "../assets/register2.jpg";
import { AccountCircle } from "@material-ui/icons";

const Register = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="register">
        <div className="regImage animate">
          <img className="animated" src={image} />
        </div>
        <div className="registerForm">
          <div className="reg">
            <div className="regTitle">
              <span>
                <AccountCircle className="singup" />
              </span>
              <h1>Sign In</h1>
            </div>
            <form className="regForm">
              <input type="text" placeholder="user name" />
              <input type="password" placeholder="password" />
            </form>
            {/* <p className="regSign">
              Already a user <span>Sign In</span>
            </p> */}
            <div className="regBtn">
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Register;
