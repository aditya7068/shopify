import React from "react";
import { productList } from "../data";
import Productitem from "./Productitem";

const product = () => {
  return (
    <div className="product">
      {productList.map((item) => (
        <Productitem item={item} />
      ))}
    </div>
  );
};

export default product;
