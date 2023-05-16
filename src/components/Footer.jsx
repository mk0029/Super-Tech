import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../assets/img/svg/superTechLogo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg_black pt-5">
        <Container className="py-5">
          <Row className="justify-content-between">
            <Col xl={3} lg={4} sm={6}>
              <a href="#">
                {" "}
                <img src={FooterLogo} alt="img" />
              </a>
              <p className="fw-normal fs_sm text-white ff_jakarta opacity08 lh_150 pt-3">
                Make informed IT choices that will benefit your business.
              </p>
            </Col>
            <Col xl={7} lg={8} xs={12}>
              <Row>
                <Col sm={3} className="d-flex justify-content-lg-center">
                  <div>
                    <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                      Main
                    </h3>
                    <ul className="ps-0">
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          About us
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4} className="d-flex justify-content-lg-end justify-content-sm-center">
                  <div>
                    <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                      Our Services
                    </h3>
                    <ul className="ps-0">
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Security
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Cloud Services
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          SD-WAN
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          CCaaS
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          UCaaS
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Connectivity
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Colocation
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={5} className="d-flex justify-content-sm-end">
                  <div>
                    <h3 className=" fw-semibold fs_sm lh_150 text-white ff_Montserrat mb-1 pb-2">
                      Legal
                    </h3>
                    <ul className="ps-0">
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Terms and Conditions{" "}
                        </a>
                      </li>
                      <li className="pb_6">
                        <a
                          className="ff_jakarta fw-normal fs_sm lh_150 text-white opacity08 "
                          href="#"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="straightLine"></div>
        <p className="ff_Montserrat fw-normal fs_sm text-white opacity08 text-center py-4">© Supertech | All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
