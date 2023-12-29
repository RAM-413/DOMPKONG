import React from "react";
import {  Container } from "react-bootstrap";
import Timelineimg from "../assets/images/timeline-man.png";
import roadmapimg from "../assets/images/timeline-line.png";


const Timeline = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="fs-1lg fw-normal color-white lh-108 text-center ff-azo mb-sm-5 pt-5 pt-md-2 pb-4">
          ROADMAP
        </h1>
        <div className="d-flex justify-content-between flex-column flex-lg-row">
          <div className=" position-relative d-flex align-items-center">
            <img
              src={Timelineimg}
              alt=""
              className="roadmap-img w-100 h-100 position-relative mx-auto mx-lg-0"
            />
            <img
              src={roadmapimg}
              alt="abc"
              className=" position-absolute roadmap-line d-none d-lg-block"
            />
          </div>
          <div className="max-roadmap d-flex flex-column gap-37 pt-5 pt-lg-0 ">
            <div className=" d-flex align-items-center gap-roadmap-1 position-relative rm-phase  ps-37">
              <svg
                className=" phase-1position d-none d-xl-block"
                xmlns="http://www.w3.org/2000/svg"
                width="179"
                height="12"
                viewBox="0 0 179 12"
                fill="none"
              >
                <path
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="precentage-circle phase-1padding d-flex align-items-center justify-content-center fw-900 fs-1sm color-black ff-mono mb-0 position-percentage1 lh-108 ml--30">
                20%
              </div>
              <div className=" fw-normal color-white w-100">
                <p className="ff-azo fs-1sm lh-108 mb-2">Phase 1</p>
                <p className=" ff-mono fs-sm lh-160 roadmap-para1 m-0">
                  Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                  arcu viverra ullamcorper condimentum massa laoree
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center gap-roadmap ps-road-2 position-relative rm-phase">
              <svg
                className="phase-2position d-none d-xl-block"
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="12"
                viewBox="0 0 109 12"
                fill="none"
              >
                <path
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM97.6667 6.00001C97.6667 8.94553 100.054 11.3333 103 11.3333C105.946 11.3333 108.333 8.94553 108.333 6.00001C108.333 3.05449 105.946 0.666675 103 0.666675C100.054 0.666675 97.6667 3.05449 97.6667 6.00001ZM6 7L103 7.00001L103 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="precentage-circle phase-2padding d-flex align-items-center justify-content-center fw-900 fs-1sm color-black ff-mono mb-0 position-percentage2 lh-108">
                40%
              </div>
              <div className=" fw-normal color-white w-100">
                <p className="ff-azo fs-1sm lh-108 mb-2">Phase 2</p>
                <p className=" ff-mono fs-sm lh-160 roadmap-para2 m-0">
                  Amet viverra diam netus aenean at mauris, facilisis quis. Urna
                  euismod sed ultricies arcu ullamcorper{" "}
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center gap-roadmap ps-road-3 position-relative rm-phase">
              <svg
                className="phase-3position d-none d-xl-block"
                xmlns="http://www.w3.org/2000/svg"
                width="123"
                height="12"
                viewBox="0 0 123 12"
                fill="none"
              >
                <path
                  d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM111.667 6C111.667 8.94552 114.054 11.3333 117 11.3333C119.946 11.3333 122.333 8.94552 122.333 6C122.333 3.05448 119.946 0.666667 117 0.666667C114.054 0.666667 111.667 3.05448 111.667 6ZM6 7H117V5H6V7Z"
                  fill="white"
                />
              </svg>
              <div className="precentage-circle phase-3padding d-flex align-items-center justify-content-center fw-900 fs-1sm color-black ff-mono mb-0 position-percentage3 lh-108">
                60%
              </div>
              <div className=" fw-normal color-white w-100">
                <p className="ff-azo fs-1sm lh-108 mb-2">Phase 3</p>
                <p className=" ff-mono fs-sm lh-160 roadmap-para3 m-0">
                  Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in
                  elit nibh faucibus mauris.{" "}
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center gap-roadmap ps-road-2 position-relative rm-phase">
              <svg
                className="phase-4position d-none d-xl-block"
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="12"
                viewBox="0 0 97 12"
                fill="none"
              >
                <path
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM85.6667 6.00001C85.6667 8.94553 88.0545 11.3333 91 11.3333C93.9455 11.3333 96.3333 8.94553 96.3333 6.00001C96.3333 3.05449 93.9455 0.666674 91 0.666674C88.0545 0.666674 85.6667 3.05449 85.6667 6.00001ZM6 7L91 7.00001L91 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="precentage-circle phase-4padding d-flex align-items-center justify-content-center fw-900 fs-1sm color-black ff-mono mb-0 position-percentage4 lh-108">
                80%
              </div>
              <div className=" fw-normal color-white w-100">
                <p className="ff-azo fs-1sm lh-108 mb-2">Phase 4</p>
                <p className=" ff-mono fs-sm lh-160 roadmap-para2 m-0">
                  Ut egestas lacus nec varius blandit volutpat, malesuada nunc,
                  nisl. Nisl mattis convallis lacus tristique.
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center gap-roadmap position-relative rm-phase">
              <svg
                className="phase-5position d-none d-xl-block"
                xmlns="http://www.w3.org/2000/svg"
                width="133"
                height="12"
                viewBox="0 0 133 12"
                fill="none"
              >
                <path
                  d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM121.667 6.00001C121.667 8.94553 124.054 11.3333 127 11.3333C129.946 11.3333 132.333 8.94553 132.333 6.00001C132.333 3.05449 129.946 0.666677 127 0.666677C124.054 0.666677 121.667 3.05449 121.667 6.00001ZM6 7L127 7.00001L127 5.00001L6 5L6 7Z"
                  fill="white"
                />
              </svg>
              <div className="precentage-circle phase-5padding d-flex align-items-center lh-108 justify-content-center fw-900 fs-1sm color-black ff-mono mb-0 position-percentage5">
                100%
              </div>
              <div className=" fw-normal color-white w-100">
                <p className="ff-azo fs-1sm lh-108 mb-2">Phase 5</p>
                <p className=" ff-mono fs-sm lh-160 roadmap-para1 m-0">
                  Faucibus congue risus nisl dictum. A, viverra malesuada nunc
                  varius. Ut dignissim mauris eu sed nisl neque.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center mt-5">
        <button className=" main-btn ff-azo fs-sm text-center lh-108 fw-400 color-black " >
        Read Our Whitepaper
                </button></div>
      </Container>
    </>
  );
};

export default Timeline;
