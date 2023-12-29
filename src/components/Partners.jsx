import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partnerright from "../assets/images/partner-right.png";


const Partners = () => {
  return (
    <>
      <Container className="py-4">
        <h2 className=" fw-normal lh-108 fs-1lg text-center color-white ff-azo mb-0 pt-5 pb-3">
          Partners
        </h2>
        <Row className="">
          <Col xl={3} lg={4} sm={6} className=" d-flex  align-items-center  py-4">
            <img src={partner1} alt="img" />
           <img className=" d-none d-lg-block" src={partnerright} alt="img" />
          </Col>
          <Col xl={3} lg={4} sm={6} className=" d-flex  align-items-center  py-4">
            <img className="ps-xl-4" src={partner2} alt="img" />
           <img className="d-none d-lg-block" src={partnerright} alt="img" />
          </Col>
          <Col xl={3} lg={4} sm={6} className=" d-flex  align-items-center  py-4 ps-lg-4">
            <img className="ps-xl-3" src={partner3} alt="img" />
           <img className="d-none d-xl-block" src={partnerright} alt="img" />
          </Col>
          <Col xl={3} lg={4} sm={6} className=" d-flex  align-items-center  py-4 ps-xl-5 ">
            <img src={partner4} alt="img" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partners;
