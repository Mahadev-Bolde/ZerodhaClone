import React from "react";

export default function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education Image"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6 mt-5">
          <h1 className="fs-2 mb-3">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basic to advance trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-4">
            Trading Q&A, the most active trading and investment community in
            India for all your market related
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
