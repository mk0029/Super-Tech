import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sideLineImg from "../assets/img/webp/section_topRight_mg.webp"
const ServicesSection = (props) => {
  return (
    <div>
      <section className="pt-1 position-relative">
        <div className="position-absolute top-0 end-0 max_width308 d-none d-md-block">
          <img className="w-100" src={sideLineImg} alt="lines" />
        </div>
        <Container className="py-sm-4">
          <div
            data-aos-duration="2000"
            data-aos="zoom-in"
            className="d-flex flex-column align-items-sm-center py-5 mt-lg-5 mb-lg-4"
          >
            <h3 className=" fw-semibold fs_2x8l text_black ff_jakarta mb-2 pb-1 text-start ">
              {props.firstHeading}
            </h3>
            <p className="maxWidth_780 text-sm-center fw-normal ff_jakarta fs_sm text_black lh_130 opacity08 mb-0 pb-1">
              {props.firstparagraph}
            </p>
          </div>
          <Row className="align-items-lg-center justify-content-center py-lg-5 ">
            <Col
              lg={6}
              md={8}
              sm={10}
              xs={12}
              className="object_fitCover"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="pad_21_20 bg_F2 br_20 h-100 box_shadowHover">
                <img
                  className="w-100 br_10 h-100"
                  src={props.partfirstimg}
                  alt="img"
                />
              </div>
            </Col>
            <Col
              lg={6}
              data-aos-duration="2000"
              data-aos="fade-left"
              className="pt-4 pt-lg-0"
            >
              <div className="ps-lg-5">
                <h3 className="ff_jakarta fw-semibold text_black lh_120 fs_4x4l mb-1 pb-2 text-lg-start text-sm-center">
                  {props.partfirstHeading}
                </h3>
                <p className="text-lg-start text-sm-center fw-normal ff_jakarta fs_sm text_black lh_150 opacity08 mb-0">
                  {props.partfirstpara}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-lg-center justify-content-center py-5 my-lg-5 flex-wrap-reverse">
            <Col
              lg={6}
              className="pt-4 pt-lg-2"
              data-aos-duration="2000"
              data-aos="fade-right"
            >
              <div className="pe-lg-4">
                <h3 className="ff_jakarta fw-semibold text_black lh_120 fs_4x4l mb-1 pb-2 text-lg-start text-sm-center">
                  {props.partsecondHeading}
                </h3>
                <p className="fw-normal ff_jakarta fs_sm text_black lh_150 opacity08 mb-0 text-lg-start text-sm-center">
                  {props.partsecondpara}
                </p>
              </div>
            </Col>
            <Col
              data-aos-duration="2000"
              data-aos="fade-left"
              lg={6}
              md={8}
              sm={10}
              xs={12}
              className="object_fitCover ps-lg-5 pt-2"
            >
              <div className="pad_21_20 bg_F2 br_20 h-100 box_shadowHover">
                <img
                  className="w-100 br_10 h-100"
                  src={props.partsecondimg}
                  alt="img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServicesSection;
