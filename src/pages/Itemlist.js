import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Itemlist = () => {
  return (
    <div className="itemlist">
      <Navbar />
      <Announcement />
      <div className="itemTitle">
        <h2>Dress</h2>
      </div>
      <div className="filterItem">
        <div className="filter">
          <div className="filterType">
            <span>Filter Produst :</span>
            <select>
              <option disabled selected>
                color
              </option>
              <option>white</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Black</option>
            </select>
            <select>
              <option disabled selected>
                Size
              </option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
        </div>
        <div className="filter">
          <div className="filterType">
            <span> Sort Product:</span>
            <select>
              <option disabled selected>
                neweset
              </option>
              <option>Price (inc) </option>
              <option>price (dec) </option>
            </select>
          </div>
        </div>
      </div>
      <Product />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Itemlist;
