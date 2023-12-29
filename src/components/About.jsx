import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import sliderimg from "../assets/images/slider-img.png";
import aboutelipse from "../assets/images/about-elipse.png"

export const About = () => {
  return (
    <>

      <div className="bg-color py-5 position-relative z-1">
        <span className=" position-absolute z-n1 about-elipse d-none d-md-block">
      <img className="" src={aboutelipse} alt="abc" />
        </span>
        <Container className="py-sm-5">
          <Row>
            <Col md={6} className="my-auto">
              <h2 className="ff-azo fs-1lg fw-400  color-white lh-108">
                About
              </h2>
              <p className="ff-mono fs-sm fw-400 color-white  opacity-70 max-539">
                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae
                viverra amet et. Erat nam molestie. Vitae mollis lacus senectus
                mattis nisl. Porta , adipiscing sed mus diam amet, ac sed
                tellus.
              </p>
            </Col>
            <Col md={6}>
              <img className="w-100" src={sliderimg} alt="abc" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
