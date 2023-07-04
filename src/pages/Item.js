import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import jacket from "../assets/jacket.jpg";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Item = () => {
  return (
    <div className="item">
      <Navbar />
      <Announcement />

      <div className="itemBox">
        <div className="itemImage">
          <img src={jacket} alt="loading.." />
        </div>
        <div className="itemInfo">
          <div className="itemTitle">
            <h1> Leather jacket</h1>
          </div>
          <div className="itemDis">
            <p>
              when it comes to leather jackets, there are a few styles that are
              considered to be classic and timeless, and these are often the
              most popular choices..
            </p>
          </div>
          <div>
            <span className="itemCost"> Rs 3200</span>
          </div>
          <div className="itemFilters">
            <div className="itemFilter">
              <span className="filterTitle"> Colors</span>
              <div
                className="filterColor"
                style={{ background: "green" }}
              ></div>
              <div
                className="filterColor"
                style={{ background: "black" }}
              ></div>
              <div className="filterColor" style={{ background: "blue" }}></div>
            </div>
            <div className="itemFilter">
              <span className="filterTitle">Size</span>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Item;
