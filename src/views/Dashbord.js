import React from "react";
import Wgt from "./Wgt";

const Dashbord = () => {
  return (
    <div>
      <div class="dashboard container mt-3 ">
        <div class="row">
          <div class="col-2"><Wgt/>
          </div>
          <div class="col-8">center</div>
          <div class="col-2"><Wgt/></div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
