import React from "react";
import { ourServisesBox } from "../Pagejs/DataMap";
function Ourservices() {
  return (
    <>
      <section
        id="Ourservices"
        style={{ backgroundColor: "#F2F2F2" }}
        className="py-5">
        <div className=" container">
          <div className="pt-lg-4 pb-lg-5 pb-md-4 pb-3">
            <h2
              className="text-center text_black ff_jakarta fw-semibold fs_4x4l  text-capitalize"
              data-aos="fade-down"
              data-aos-duration="3000">
              our services
            </h2>
          </div>
          <div className="">
            <div className="row justify-content-center">
              {ourServisesBox.map((data) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4 col-sm-6  mb-4 "
                    data-aos="zoom-in"
                    data-aos-delay={data.Delay}
                    data-aos-duration="3000">
                    <div className="text-center bg-white px-3  py-5 Ourservices_Boxes h-100 transition300">
                      <span className=" d-inline-block pb-2 mb-1 transition300">
                        <div className="svg transition300 d-inline-block ">
                          {data.svgImage}
                        </div>
                      </span>
                      <h3 className=" ff_jakarta fs_md fw-semibold text_black  transition300">
                        {data.Heading}
                      </h3>
                      <p
                        style={{ maxLines: "230px" }}
                        className="mt-2 ff_jakarta fs_sm fw-normal text_black opacity08 mb-0 transition300">
                        {data.peragraph}
                      </p>
                    </div>
                  </div>
                );
              })}
              <span
                className=" d-inline-block pt-md-5 pt-4 text-center mb-md-3"
                data-aos="fade-up"
                data-aos-duration="3000">
                <em className=" ff_jakarta fs_md fw-med text_black opacity08">
                  Make informed IT choices that will benefit your business.
                </em>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourservices;
