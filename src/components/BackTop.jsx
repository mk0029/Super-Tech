import React, { useState, useEffect } from "react";
import bktop from "../assets/img/png/backToTop-img.png";

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
          style={{ minWidth: "30px", maxWidth: "3%" }}
          className=" position-fixed end-0 bottom-0 m-3 rounded-5 "
          src={bktop}
          alt="backtotopimg"
        />
      </button>{" "}
    </div>
  );
};
export default BackTop;
