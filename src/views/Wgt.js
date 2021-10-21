import React from "react";

const Wgt = () => {
  return (
    <div>
      <div class="row m-auto   ">
        <div class="col mb-2 bg-primary l-bg-cherry rounded">
          <h6 class="text-dark">New Order</h6>
          <div class="row " style={{ color: "white" }}>
            <div class="col">
              <h5>35</h5>ROP5
            </div>
            <div class="col ico">
              <i class="fa fa-thermometer-half" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="row m-auto   ">
        <div class="col mb-2 l-bg-blue-dark  bg-primary rounded">
          <h6 class="text-dark">Customer</h6>
          <div class="row " style={{ color: "white" }}>
            <div class="col">
              <h5>35</h5>ROP5
            </div>
            <div class="col ico">
              <i class="fas fa-cloud"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-auto   ">
        <div class="col mb-2 l-bg-green-dark bg-primary rounded">
          <h6 class="text-dark">Ticket Resolves</h6>
          <div class="row " style={{ color: "white" }}>
            <div class="col">
              <h5>35</h5>ROP5
            </div>
            <div class="col ico">
            <i class="fas fa-chart-pie"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-auto   ">
        <div class="col mb-2 l-bg-orange-dark bg-primary rounded">
          <h6 class="text-dark">Revenue Today</h6>
          <div class="row " style={{ color: "white" }}>
            <div class="col">
              <h5>35</h5>ROP5
            </div>
            <div class="col ico">
            <i class="fas fa-chart-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wgt;
