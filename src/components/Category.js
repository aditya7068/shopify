import React from "react";
import Categoryitem from "./Categoryitem";
import { categories } from "../data";

// console.log(categories);

const Category = () => {
  return (
    <div className="category">
      {categories.map((item) => (
        <Categoryitem item={item} />
      ))}
    </div>
  );
};

export default Category;
