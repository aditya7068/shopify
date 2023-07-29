import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import shoes from "../assets/shoes.png";
import croptop from "../assets/shoes.png";
import { Add, Remove, Search, ShoppingCartOutlined } from "@material-ui/icons";

const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <Announcement />
      <div className="cartContainer">
        <div className="cartTitle">
          <h1>YOUR BAG</h1>
        </div>
        <div className="cartMenu">
          <div className="cartButton">
            <button> CONTINUE SHOPPING</button>
          </div>
          <div className="cartDetails">
            <div className="cartDetail">
              <span>Shopping Bag(2)</span> <span>Your Wishlist(0)</span>
            </div>
            {/* <div className="cartDetail">Your Wishlist(0)</div> */}
          </div>
          <div className="cartButton">
            <button style={{ background: "black", color: "white" }}>
              CHECKOUT NOW
            </button>
          </div>
        </div>
        <div className="cartBottom">
          <div className="cartProductDetail">
            <div className="cartProductImage">
              <img src={shoes} />
            </div>
            <div className="cartProductspecifications">
              <ul className="">
                <li>
                  <span className="cartProductspecification">Product: </span>{" "}
                  BLACK SNEAKER
                </li>
                <li>
                  <span className="cartProductspecification">Id: </span>{" "}
                  ITEM547937902
                </li>
                <li>
                  <span className="cartProductspecification">Size: </span> 39
                </li>
              </ul>
            </div>
            <div className="cartProductprice">
              <div className="quantitySummary">
                <Add />
                <div className="quantity"> 2</div>
                <Remove />
              </div>
              <div className="price"> $ 30</div>
            </div>
          </div>

          <div className="orderSummary">
            <div className="summaryTitle">
              <h3>ORDER SUMMARY</h3>
            </div>
            <div className="summaryItem">
              <span className="summaryText">Subtotal:</span>
              <span className="summaryItemprice">$ 60</span>
            </div>
            <div className="summaryItem">
              <span className="summaryText">Estimated Shipping:</span>
              <span className="summaryItemprice">$ 5.0</span>
            </div>
            <div className="summaryItem">
              <span className="summaryText">Shipping Discount:</span>
              <span className="summaryItemprice">$ -5.0</span>
            </div>
            <div className="summaryItem">
              <span className="summaryText">Total:</span>
              <span className="summaryItemprice">$ 60</span>
            </div>
            <div className="summaryButton">
              <button>CHECKOUT NOW</button>
            </div>
          </div>
        </div>

        {/* <div className="cartBottom">
          <div className="cartProductDetail">
            <div className="cartProductImage">
              <img src={croptop} />
            </div>
            <div className="cartProductspecifications">
              <ul className="">
                <li>
                  <span className="cartProductspecification">Product: </span>{" "}
                  BLACK SNEAKER
                </li>
                <li>
                  <span className="cartProductspecification">Id: </span>{" "}
                  ITEM547937902
                </li>
                <li>
                  <span className="cartProductspecification">Size: </span> 39
                </li>
              </ul>
            </div>
            <div className="cartProductprice">
              <div className="quantitySummary">
                <Add />
                <div className="quantity"> 2</div>
                <Remove />
              </div>
              <div className="price"> $ 30</div>
            </div>
          </div>
          <div className="orderSummary"></div>
        </div> */}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
