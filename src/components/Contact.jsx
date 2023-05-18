import React from "react";
import contact from "../assets/img/webp/contectus-img.webp";

function Contact() {
  return (
    <section id="Contact" className="py-5">
      <div className="container">
        <div className="pb-lg-5 mb-xxl-5">
          {" "}
          <div className="row align-items-center">
            {" "}
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500">
              <div className=" position-relative orange_bg_box1 orange_bg_box2 transition300">
                <img className="w-100 p-2 pe-lg-4" src={contact} alt="img" />
              </div>
            </div>
            <div
              className="col-lg-6 mt-sm-5 mt-4 mt-lg-0"
              data-aos="fade-left"
              data-aos-duration="3000">
              <div className="ps-lg-4">
                <h2 className="ff_jakarta fw-semibold fs_4x4l text_black ">
                  Contact Us
                </h2>
                <form className="mt-xl-5 mt-4" action="">
                  <div className="d-flex gap-sm-3 gap-1">
                    <div className="d-flex flex-column w-50">
                      <label
                        className="ff_jakarta fw-normal fs_sm text_black"
                        for="fname">
                        First Name*
                      </label>
                      <input
                        required
                        className="mt-1 py-sm-3 py-1 px-2"
                        type="text"
                        id="fname"
                        name="fname"
                      />
                    </div>
                    <div className="d-flex flex-column w-50">
                      <label
                        className="ff_jakarta fw-normal fs_sm text_black"
                        for="lname">
                        Last Name*
                      </label>
                      <input
                        required
                        className="mt-1 py-sm-3 py-1 px-2"
                        type="text"
                        id="lname"
                        name="lname"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <label
                      className="ff_jakarta fw-normal fs_sm text_black"
                      for="email">
                      Email
                    </label>
                    <input
                      required
                      className="mt-1 py-sm-3 py-1 px-2"
                      type="text"
                      id="email"
                      name="lname"
                    />
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <label
                      className="ff_jakarta fw-normal fs_sm text_black"
                      for="Company">
                      Company Name
                    </label>
                    <input
                      className="mt-1 py-sm-3 py-1 px-2"
                      type="text"
                      id="Company"
                      name="lname"
                    />
                  </div>
                  <label
                    for="Massage"
                    className="ff_jakarta fw-normal fs_sm text_black mt-3">
                    Message
                  </label>
                  <textarea
                    style={{ resize: "none" }}
                    className="w-100 mt-1 px-2 pt-2"
                    name="Massage"
                    id="Massage"></textarea>
                  <input
                    className="w-100 submit_btn ff_jakarta fw-normal fs_sm text-white"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
