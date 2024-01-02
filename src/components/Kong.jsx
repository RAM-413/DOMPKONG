import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bootle_img from "../assets/images/bottle-img.png";
import left1 from "../assets/images/left1.png";
import left2 from "../assets/images/left2.png";
import left3 from "../assets/images/left3.png";
import left4 from "../assets/images/left4.png";
import left5 from "../assets/images/left5.png";
import Right1 from "../assets/images/right1.png";
import Right2 from "../assets/images/right2.png";
import Right3 from "../assets/images/right3.png";
import Right4 from "../assets/images/right4.png";
import Right5 from "../assets/images/right5.png";
const Kong = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "Linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 595,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider2 = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "Linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 595,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="kong-padding overflow-hidden position-relative ">
      <span className=" position-absolute kong-elipse z-n1"> 

      </span>
      <Container className="">
        <h1 className="fs-1lg fw-normal ff-azo color-white lh-108 text-center">
          THE KONGS
        </h1>
        <Slider {...settings} className=" d-block d-lg-none mt-5">
          <div className=" mx-auto">
            
            <img src={left1} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
          
            <img src={left2} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
            
            <img src={left3} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
           
            <img src={left4} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
           
            <img src={left5} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
        </Slider>
        <div className=" d-flex justify-content-center">
          <img
            src={Bootle_img}
            alt="big"
            className="bigmonkey w-100 h-100 mx-auto mt--15"
          />
        </div>
        <Slider {...slider2} className=" d-block d-lg-none mt-5">
          <div className=" mx-auto">
            <img src={Right1} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
            <img src={Right2} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
          
            <img src={Right3} alt="image" className=" mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
           
            <img src={Right4} alt="image" className="mx-auto w-150 h-150 mx-5" />
          </div>
          <div className=" mx-auto">
          
            <img src={Right5} alt="image" className="mx-auto w-150 h-150 mx-5" />
          </div>
        </Slider>
        <div className=" d-none d-lg-block">
          <img src={left1} alt="images" className="left1 " />
          <img src={left2} alt="images" className="left2 " />
          <img src={left3} alt="images" className="left3 " /> 
          <img src={left4} alt="images" className="left4 " />
          <img src={left5} alt="images" className="left5 " />
          <img src={Right1} alt="images" className="right1 " />
          <img src={Right2} alt="images" className="right2 " />
          <img src={Right3} alt="images" className="right3 " />
          <img src={Right4} alt="images" className="right4 " />
          <img src={Right5} alt="images" className="right5 " />
        </div>
      </Container>
    </div>
  );
};
export default Kong;
