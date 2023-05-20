import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/img/svg/superTechLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg_black pt-lg-5" id="footer">
        <Container className="py-5">
          <Row className="justify-content-between">
            <Col
              data-aos="zoom-in"
              data-aos-duration="1000"
              xl={3}
              lg={4}
              sm={6}>
              <Link to="/">
                <img src={FooterLogo} alt="img" />
              </Link>
              <p className="fw-normal fs_sm text-white ff_jakarta opacity08 lh_150 pt-3">
                Make informed IT choices that will benefit your business.
              </p>
            </Col>
            <Col xl={7} lg={8} xs={12}>
              <Row className=" pt-lg-0 pt-4">
                <Col
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  sm={3}
                  xs={6}
                  className="d-flex justify-content-lg-center">
                  <div>
                    <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                      Main
                    </h3>
                    <ul className="ps-0">
                      <li className="pb_6">
                        <Link to="/">
                          <span className=" ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 d-block ">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#About">
                          About us
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#Contact">
                          Contact us
                        </a>
                      </li>
                    </ul>
                    <div className="d-sm-none">
                      <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                        Legal
                      </h3>
                      <ul className="ps-0">
                        <li className="pb_6">
                          <a
                            className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                            href="#">
                            Terms and Conditions{" "}
                          </a>
                        </li>
                        <li className="pb_6">
                          <a
                            className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                            href="#">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col
                  data-aos="zoom-in"
                  data-aos-duration="2500"
                  sm={4}
                  xs={6}
                  className="d-flex justify-content-lg-end justify-content-sm-center">
                  <div>
                    <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                      Our Services
                    </h3>
                    <ul className="ps-0">
                      <li className="pb_6">
                        <Link to="/">
                          <span className=" ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 d-block ">
                            Security
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/cloud">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08  d-block ">
                            {" "}
                            Cloud Services
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/SdWan">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08  ">
                            SD-WAN
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/CCaaS">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 ">
                            CCaaS
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/UCaaS">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 ">
                            UCaaS
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/Connectivity">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 ">
                            Connectivity
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/Colocation">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 ">
                            Colocation
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  sm={5}
                  className="d-sm-flex justify-content-sm-end d-none">
                  <div>
                    <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                      Legal
                    </h3>
                    <ul className="ps-0">
                      <li className="pb_6">
                        <Link to="/Trems-and-Condition">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 ">
                            Terms and Conditions{" "}
                          </span>
                        </Link>
                      </li>
                      <li className="pb_6">
                        <Link to="/Privacy-Policy">
                          <span className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 ">
                            Privacy Policy
                          </span>
                        </Link>
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"></a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="straightLine"></div>
        <p className="ff_Montserrat fw-normal fs_sm text-white opacity08 text-center mb-0 py-4">
          © Supertech | All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
