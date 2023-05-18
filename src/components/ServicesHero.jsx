import React from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
const ServicesHero = (props) => {
  return (
    <>
      <header
        className="bg_services_hero d-flex flex-column min_Hight_Custom "
        style={{
          backgroundImage: `url(${props.heroBG})`,
        }}>
        <div style={{ position: "relative", zIndex: "123" }}>
          {" "}
          <Header Nav_TAb_BottomSecond="Nav_TAb_Bottom" />
        </div>
        <Container className="flex-grow-1 d-flex justify-content-center align-items-center position-relative z_index0">
          <h2
            style={{ maxWidth: "906px" }}
            className=" text-center text-white ff_jakarta fs_6x4l fw-bold transition300 position-relative z_index0">
            {props.heroHeading}
          </h2>
        </Container>
      </header>
    </>
  );
};

export default ServicesHero;
