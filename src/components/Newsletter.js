import React from "react";
import { Send } from "@material-ui/icons";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsHead">
        <h1>Newsletter</h1>
      </div>
      <div className="newsDiscription">
        get timely update from your favorite products{" "}
      </div>
      <div className="searchbar">
        <input
          className="newsInput"
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="newsbtn">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
