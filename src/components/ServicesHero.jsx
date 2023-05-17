import React from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
const ServicesHero = (props) => {
  return (
    <>
      <header
        className="bg_services_hero d-flex flex-column min_vh_70 min_vh_40 "
        style={{
          backgroundImage: `url(${props.heroBG})`,
        }}>
        <Header Nav_TAb_BottomSecond="Nav_TAb_Bottom" />
        <Container className="flex-grow-1 d-flex justify-content-center align-items-center">
          <h2
            style={{ maxWidth: "906px" }}
            className=" text-center text-white ff_jakarta fs_6x4l fw-bold transition300">
            {props.heroHeading}
          </h2>
        </Container>
      </header>
    </>
  );
};

export default ServicesHero;
