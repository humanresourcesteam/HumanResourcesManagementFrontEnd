import React from "react";
import founderror from "../../../src/assets/404.svg";
import "./notfound.scss";
const NotFound = () => {
  return (
    <div className="founderror">
      <img src={founderror} alt="" />
    </div>
  );
};

export default NotFound;
