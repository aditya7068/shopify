import React from "react";

const Categoryitem = ({ item }) => {
  return (
    <>
      <div className="categoryItem">
        <div className="catImage">
          <img src={item.img} alt="..loading" />
        </div>
        <div className="catInfo">
          <div className="catTitle">
            <h1>{item.title}</h1>
          </div>
          <div className="catbtn">
            <button>shop now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categoryitem;
