import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mintimg from "../assets/images/mint-img.png";

export const Mint = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((prevCount) => (prevCount < 10000 ? prevCount + 1 : prevCount));
  };
  const handleDecrement = () => {
    setCounter((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  const Countvalue = counter < 10 ? `0${counter}` : counter;
  return (  
    <div className="mint-bg pt-5 position-relative z-1">
      <span className=" position-absolute top--10 z-n1 d-none d-md-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="465"
          height="757"
          viewBox="0 0 465 757"
          fill="none"
        >
          <g filter="url(#filter0_f_0_62)">
            <circle cx="86.5" cy="378.5" r="86.5" fill="#FDDA60" />
          </g>
          <defs>
            <filter
              id="filter0_f_0_62"
              x="-292"
              y="0"
              width="757"
              height="757"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="146"
                result="effect1_foregroundBlur_0_62"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <span className=" position-absolute end-0 top-40 mint-elipse-2 z-n1"></span>
      <Container className="">
        <Row className="d-flex  justify-content-center">
          <Col
            lg={6}
            className="d-flex  justify-content-lg-center justify-content-start"
          >
            <img className="w-100 max-300" src={mintimg} alt="mint-img" />
          </Col>
          <Col lg={6} className="my-auto pt-4 pt-lg-0">
            <h2 className="ff-azo color-white fw-400 fs-1lg lh-108 pb-5">
              Mint NFT
            </h2>
            <Row className="pt-2">
              <Col className="pt-4 col-6">
                <p className="ff-mono color-white fw-900 fs-lg lh-108">9999 </p>
              </Col>
              <Col className="pt-4 col-6">
                <p className="ff-mono color-white fw-900 fs-lg lh-108">
                  .2 ETH
                </p>
              </Col>
              <Col className="pt-1 col-6">
                <p className="fs-sm fw-400 ff-mono color-white opacity-70">
                  of 10,000 minted
                </p>
              </Col>
              <Col className="pt-1 col-6">
                <p className="fs-sm fw-400 ff-mono color-white opacity-70">
                  per NFT
                </p>
              </Col>
              <Col className="pt-4 col-6">
                <p className="ff-mono color-white fw-900 fs-lg lh-108">
                  Max 9{" "}
                </p>
              </Col>
              <Col className="pt-4 col-6">
                <p className="ff-mono color-white fw-900 fs-lg lh-108">Max 2</p>
              </Col>
              <Col className="pt-1 col-6">
                <p className="fs-sm fw-400 ff-mono color-white opacity-70">
                  NFTs per transaction
                </p>
              </Col>
              <Col className="pt-1 col-6">
                <p className="fs-sm fw-400 ff-mono color-white opacity-70">
                  Transaction per wallet
                </p>
              </Col>
            </Row>
            <div className=" d-flex  gap-3 pt-5   align-items-center">
              <p
                className="d-flex align-items-center justify-content-center sub curser-pointer mb-0 ff-mono fs-lg fw-900 lh-108 color-black"
                onClick={handleDecrement}
              >
                -
              </p>
              <p className="mb-0 size-container d-flex align-items-center justify-content-center ff-mono fs-lg fw-900 lh-108 color-white">
                {Countvalue}
              </p>
              <p
                className="d-flex align-items-center justify-content-center  add curser-pointer mb-0 ff-mono fs-lg fw-900 lh-108 color-black"
                onClick={handleIncrement}
              >
                +
              </p>
            </div>
            <button className="main-btn max-503 w-100 mt-4  ff-azo color-black text-uppercase lh-108 fs-1md text-center">
              MINT NOW
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
