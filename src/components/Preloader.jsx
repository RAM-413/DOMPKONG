import React from "react";


const Preloader = () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none");
    document.body.classList.remove("overflow-hidden");
  }, 2000);
  return (
    <div>
      <div
        id="preloader"
        class=" overflow-y-hidden  position-relative loader_bg " 
      >
        <div class=" bg-black vh-100 d-flex align-items-center justify-content-center  position-fixed  top-0 start-0 w-100 ">
          <div class="d-flex align-items-center justify-content-center preloder-img ">
            <div class="loading-bar">Loading</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
