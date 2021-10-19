import React from "react";

const Header = () => {
  return (
    <div class="container-fluid ">
      <div class="row header p-2  ">
        <div class="col-md-6 text-start text-light">
          <p>Drilling Dashboard Demo <p class="textHeader" >From Deep See Drilling Project</p>{" "}</p>
          
        </div>
        <div class="col-md-2">
          {" "}
          <button type="button" class="btn btn-warning btn-sm">
            Drilling
          </button>
        </div>
        <div class="col-md-4 justify-content text-end"> Drilling Dashboard Demo</div>
      </div>
    </div>
  );
};

export default Header;
