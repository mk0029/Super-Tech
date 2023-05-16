import React from "react";
import Img__IT_Profesnol from "../assets/img/webp/IT-Counsling.webp";
function ItProfesnols() {
  return (
    <>
      <section>
        <div className=" container">
          <div className="">
            <div className="row">
              <div className="col-6 h-100">
                <span>
                  <img className="w-100" src={Img__IT_Profesnol} alt="" />
                </span>
              </div>
              <div className="col-6">
                <h5 className=" ff_jakarta fs_xl fw-semibold text_blue">
                  About Us
                </h5>
                <h2 className=" ff_jakarta fw-semibold text_black fs_4x4l ">
                  professional IT consulting
                </h2>
                <p
                  style={{ lineHeight: "150%" }}
                  className=" ff_jakarta fw-normal text_black opacity08 fs_sm ">
                  Supertech IT Consulting leverages decades of experience
                  working with a variety of businesses. We listen, learn,
                  analyze and solve your business IT requirements. We take the
                  time to get to know you and your business. We are always
                  looking for new solutions that offer the best value, service
                  and cost savings. When you engage with Supertech IT
                  Consulting, know that we can assist in evaluating your IT
                  needs and scale with your increased flux over time. We can
                  improve your tech stack to include improved UX, CX,
                  Connectivity, Networking and Security. We should be the first
                  place you go to maximize revenue in the dynamic, fast-paced
                  ecosystem of Information Technology. We understand your
                  priorities, let us develop our relationship and design
                  exceptional solutions that offer the best outcomes for your
                  company, team and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItProfesnols;
