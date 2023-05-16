import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import organisationImg from "../assets/img/webp/organisations.webp";
import protectionImg from '../assets/img/webp/protection.webp'
const ServicesSection = (props) => {
  return (
    <div>
      <section className="pt-1">
        <Container className="py-4">
          <div className="d-flex flex-column align-items-center py-5 mt-5 mb-4">
            <h3 className=" fw-semibold fs_2x8l text_black ff_jakarta mb-2 pb-1">
              {props.firstHeading}
            </h3>
            <p className="maxWidth_780 text-center fw-normal ff_jakarta fs_sm text_black lh_130 opacity08 mb-0 pb-1">
              {props.firstparagraph}
            </p>
          </div>
          <Row className="align-items-xl-center justify-content-center py-5 ">
            <Col lg={6} md={8} sm={10} xs={12} className="object_fitCover">
              <div className="pad_21_20 bg_F2 br_20 h-100 ">
                <img
                  className="w-100 br_10 h-100"
                  src={props.partfirstimg}
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="ps-lg-5">
                <h3 className="ff_jakarta fw-semibold text_black lh_120 fs_4x4l mb-1 pb-2">
                  {props.partfirstHeading}
                </h3>
                <p className="fw-normal ff_jakarta fs_sm text_black lh_150 opacity08 mb-0">
                  {props.partfirstpara}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-xl-center justify-content-center py-5 my-5 flex-wrap-reverse">
            <Col lg={6} className="pt-2">
              <div className="pe-lg-4">
                <h3 className="ff_jakarta fw-semibold text_black lh_120 fs_4x4l mb-1 pb-2">
                  {props.partsecondHeading}
                </h3>
                <p className="fw-normal ff_jakarta fs_sm text_black lh_150 opacity08 mb-0">
                  {props.partsecondpara}
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              md={8}
              sm={10}
              xs={12}
              className="object_fitCover ps-lg-5 pt-2"
            >
              <div className="pad_21_20 bg_F2 br_20 h-100 ">
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
}

export default ServicesSection