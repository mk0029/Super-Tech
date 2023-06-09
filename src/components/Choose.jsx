import React from "react";
import logo from "../assets/img/svg/Choose.svg";

function Choose() {
  return (
    <>
      <section className="py-5 my-lg-5 overflow-hidden" id="Choose">
        <div className="container">
          <h2 className=" ff_jakarta fw-semibold fs_4x4l text_black text-center ">
            Why Choose Us{" "}
          </h2>
          <div className="d-flex justify-content-center justify-content-sm-start">
            {" "}
            <div className="grid_container mt-5">
              <div className="item_1 grid_boxes bg-danger">
                <div
                  style={{ background: "#f7fdf6" }}
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="20"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#5FCE43" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Supportive
                  </h2>
                </div>
              </div>
              <div className="item_2 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="50"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#CF1818" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Empathetic
                  </h2>
                </div>
              </div>
              <div className="item_3 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="100"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#E5BD26" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Engaging
                  </h2>
                </div>
              </div>
              <div className="item_4 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="150"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#EC6A15" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Progressive
                  </h2>
                </div>
              </div>
              <div className="item_5 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="200"
                  data-aos-duration="1000">
                  <img className="w_xsm_75" src={logo} alt="img" />
                </div>
              </div>
              <div className="item_6 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="250"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#186CCF" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Agile
                  </h2>
                </div>
              </div>
              <div className="item_7 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="300"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#186CCF" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Analytical
                  </h2>
                </div>
              </div>
              <div className="item_8 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="350"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#8E39AB" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Comprehensive
                  </h2>
                </div>
              </div>
              <div className="item_9 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="400"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#0EB196" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Receptive
                  </h2>
                </div>
              </div>
              <div className="item_10 grid_boxes">
                <div
                  className="grid_box"
                  data-aos="fade-down"
                  data-aos-easing="zoom-out"
                  data-aos-delay="450"
                  data-aos-duration="1000">
                  <h2
                    style={{ color: "#00A3FF" }}
                    className=" ff_jakarta fw-semibold fs_2x8l text-center">
                    Direct
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;
