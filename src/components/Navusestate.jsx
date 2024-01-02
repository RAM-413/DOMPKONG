import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Navusestate = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <nav className="d-flex justify-content-between align-items-center">
        <h1 className="logo">logo</h1>
         <ul
          className={`${open ? "start-0" : "start--100"} d-flex open-nav  gap-5`}
        >
          <li>conrat</li>
          <li>conrat</li>
          <li>conrat</li>
          <li>conrat</li>
          <li>conrat</li>
          <li>conrat</li>
        </ul> 
        <button onClick={()=> setOpen(!open)} className=" position-relative z-3 d-block d-lg-none">show</button>
      </nav>
    </Container>
  );
};

export default Navusestate;
