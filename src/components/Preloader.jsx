import React from "react";

const Preloader = () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none");
    document.body.classList.remove("overflow-hidden");
  }, 2000);
  return (
    <div >
      <div
        id="preloader"
        class=" overflow-y-hidden  position-relative loader_bg "
      >
        <div class=" bg-black vh-100 d-flex align-items-center justify-content-center z-15  position-fixed  top-0 start-0 w-100 overflow-hidden">
          <div class="d-flex align-items-center justify-content-center preloder-img ">
            <div id="container">
              <label class="loading-title">Loading ...</label>
              <span class="loading-circle sp1">
                <span class="loading-circle sp2">
                  <span class="loading-circle sp3"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
