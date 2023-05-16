import React from "react";
import { Container } from "react-bootstrap";
import heroBG from "../assets/img/webp/securityHero_bg.webp";
import Header from "./Header";
const ServicesHero = (props) => {
  return (
    <>
      <header
        className="bg_services_hero d-flex flex-column min_vh_60 min_vh_40"
        style={{
          backgroundImage: `url(${props.heroBG})`,
        }}>
        {" "}
        <Header />
        <Container className="flex-grow-1 d-flex justify-content-center align-items-center">
          <h2 className=" text-white ff_jakarta fs_6x4l fw-bold">
            {props.heroHeading}
          </h2>
        </Container>
      </header>
    </>
  );
};

export default ServicesHero;
