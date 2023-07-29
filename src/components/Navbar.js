import React from "react";
import { Link } from "react-router-dom";
import { Badge, colors } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="left">
          <div className="language">En</div>
          <div className="search_bar">
            <div className="input">
              <input type="text" name="name" />
            </div>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <h1>ADI.</h1>
          </div>
        </div>
        <div className="right">
          <Link to="/" className="menuItem">
            HOME
          </Link>
          <Link to="/register" className="menuItem">
            REGISTER
          </Link>
          <Link to="/login" className="menuItem">
            LOGIN
          </Link>
          <Link to="/cart" className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          {/* <div className="menuItem">REGISTER</div>
          <div className="menuItem">LOGIN</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
