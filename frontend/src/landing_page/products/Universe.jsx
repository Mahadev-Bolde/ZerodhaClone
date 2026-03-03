import React from "react";

export default function Universe() {
  return (
    <div className="container mt-5 pt-5 text-center">
      <div className="row">
        <h3>The Zerodha Universe</h3>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "200px" }}
          />
          <p className="text-muted text-small mt-4">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "150px" }}
          />
          <p className="text-muted text-small mt-4">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "200px" }}
          />
          <p className="text-muted text-small mt-4">
            Options treading platform
          </p>
        </div>
        <div className="col-4 pt-3 px-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "200px" }}
          />
          <p className="text-muted text-small mt-4">Asset management</p>
        </div>
        <div className="col-4 pt-3 px-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "200px" }}
          />
          <p className="text-muted text-small mt-4">Bonds treading platform</p>
        </div>
        <div className="col-4 pt-3 px-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "150px" }}
          />
          <p className="text-muted text-small mt-4">Insurance platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 my-5"
          style={{ width: "20%", margin: "0 auto" }}>
          Sign up for free
        </button>
      </div>
    </div>
  );
}
