import React from "react";
import aboutImg from "../assets/img/webp/IT.webp";
import aboutSmall from "../assets/img/svg/about-small.svg";
import vector from "../assets/img/svg/about-vector.svg";

function About() {
  return (
    <section className="py-4 py-lg-5 overflow-hidden position-relative">
      <img
        className="position-absolute about_vector_posi d-none d-sm-flex"
        src={vector}
        alt="img"
      />
      <div className="container py-md-5 my-lg-5">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div
              style={{ background: "#F2F2F2", borderRadius: "20px" }}
              className="px-sm-4 px-2 pt-sm-4 pt-2 position-relative w_sm_75 w_xsm_100 w_lg_100 mx-auto "
            >
              <img
                className="position-absolute it_img_bottom"
                src={aboutSmall}
                alt="img"
              />
              <img className="w-100" src={aboutImg} alt="img" />
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="ps-lg-4 d-flex flex-column justify-content-end h-100">
              <p className="ff_jakarta fw-semibold fs_xl text_blue z_index1">
                About Us
              </p>
              <h2 className=" text-capitalize ff_jakarta fw-semibold fs_4x4l text_black z_index1">
                professional IT <span className="d-lg-block"> consulting</span>
              </h2>
              <p className=" ff_jakarta fw-normal fs_sm text_black opacity08 mb-0">
                Supertech IT Consulting leverages decades of experience working
                with a variety of businesses. We listen, learn, analyze and
                solve your business IT requirements. We take the time to get to
                know you and your business. We are always looking for new
                solutions that offer the best value, service and cost savings.
                When you engage with Supertech IT Consulting, know that we can
                assist in evaluating your IT needs and scale with your increased
                flux over time. We can improve your tech stack to include
                improved UX, CX, Connectivity, Networking and Security. We
                should be the first place you go to maximize revenue in the
                dynamic, fast-paced ecosystem of Information Technology. We
                understand your priorities, let us develop our relationship and
                design exceptional solutions that offer the best outcomes for
                your company, team and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
