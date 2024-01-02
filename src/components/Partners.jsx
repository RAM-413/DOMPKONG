import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";


const Partners = () => {
  const SliderFour = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                dots: false,
            },
        },
    ],
};
  return (
    <>
      <div className='py-4'>
            <div className="container-xxl mb-sm-4">
                <p className="text-white fs-1lg m-0  fw-normal text-center ff-azo pt-4 pb-5">PARTNERS</p>
                <Slider {...SliderFour}>
                    <div className="d-flex justify-content-center" >
                        <img src={partner1} alt="#" className="w-100 mx-h-153"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={partner2} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center" >
                        <img src={partner3} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={partner4} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center" >
                        <img src={partner1} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={partner2} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center" >
                        <img src={partner3} alt="#" className="w-100 mx-h-153" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src={partner4} alt="#" className="w-100 mx-h-153" />
                    </div>
                </Slider>
            </div>
        </div>
    </>
  );
};

export default Partners;
