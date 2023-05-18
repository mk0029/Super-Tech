import React, { useState, useEffect } from "react";
import bktop from "../assets/img/png/btop.png";

const BackTop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      <button
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-2 border-0 "
            : "btn d-none position-fixed end-0 bottom-0 mb-2 border-0"
        }>
        <img
          style={{ width: "40px" }}
          className=" position-fixed end-0 bottom-0 m-2 rounded-5 bg__Grident "
          src={bktop}
          alt="backtotopimg"
        />
      </button>
    </div>
  );
};
export default BackTop;
