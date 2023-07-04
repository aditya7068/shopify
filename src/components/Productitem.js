import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Productitem = ({ item }) => {
  return (
    <Link to="/Item" className="Productitem">
      <div className="circle"></div>
      <div className="productImage">
        <img src={item.img} alt="..loadiing" />
      </div>
      <div className="productIcon">
        <div className="pIcon">
          <ShoppingCartOutlined />
        </div>
        <div className="pIcon">
          <Search />
        </div>
        <div className="pIcon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </Link>
  );
};

export default Productitem;
