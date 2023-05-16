import React from "react";

function Hero() {
  return (
    <section id="Hero" className="bg_black pt-4 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1 className="ff_jakarta fw-bold fs_5x2l text-white text-capitalize mb-0">
                Helping <span className="text_orange">business</span> through
                Information technology
              </h1>
              <p className="ff_jakarta fw-normal fs_sm text-white opacity08 mb-0 mt-2 pt-1 mb-4 pb-3">
                Start making informed IT choices that will benefit your
                business.
              </p>

              <a
                className="nav_btn fw-semibold fs_sm text-white d-inline-block transition300"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
