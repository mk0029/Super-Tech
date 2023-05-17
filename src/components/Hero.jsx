import React from "react";
import Header from "./Header";
import headerImg from "../assets/img/webp/hero-img.webp";
import heroBottom from "../assets/img/svg/hero-posi-img.svg";
import rightBottom from "../assets/img/svg/hero-bottom-right-img.svg";

function Hero() {
  return (
    <section
      id="Hero"
      className="bg_black position-relative min_vh_100 d-flex flex-column"
    >
      <div>
        <Header Nav_TAb_Bottom="Nav_TAb_Bottom" />
      </div>
      <span
        style={{ zIndex: "0" }}
        className="Bg_shadow position-absolute end-0 top-50 translate-middle me-xl-5"
      ></span>
      <img
        className="position-absolute left_bottom_img"
        src={heroBottom}
        alt="img"
      />
      <img
        className="position-absolute left_bot tom_img bottom-0 end-0 opacity-50 d-none d-sm-flex"
        src={rightBottom}
        alt="img"
      />
      <div className="container d-flex flex-grow-1 position-relative z_index0 py-5 py-xl-0">
        <div className="row align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="mt-4 mt-lg-0">
              <h1
                style={{ lineHeight: "128%" }}
                className="ff_jakarta fw-bold fs_5x2l text-white text-capitalize mb-0"
              >
                Helping <span className="text_orange">business</span> through
                Information technology
              </h1>
              <p className="ff_jakarta fw-normal fs_sm text-white opacity08 mb-0 mt-2 pt-1 mb-4 pb-3">
                Start making informed IT choices that will benefit your
                business.
              </p>

              <a
                className="nav_btn ff_jakarta fw-semibold fs_sm text-white d-inline-block transition300"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 mt-5 mt-lg-0 "
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="d-flex justify-content-center">
              <img
                style={{ zIndex: "1", position: "relative" }}
                className="w_75 w-100 translate_x"
                src={headerImg}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
