import React from "react";

export default function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 pt-5">
          <img src="media/images/largestBroker.svg" alt="Awards Image" />
        </div>
        <div className="col-6 ps-5">
          <h1 className="mb-3 fs-1">Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volume in india daily by treding and investing in:
          </p>
          <div className="row p-4 ">
            <ul className="col-6 ps-4">
              <li>
                <p>Futures and Options</p>
              </li>
              <li>
                <p>Commodity derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
            </ul>
            <ul className="col-6 mb-5 ps-4">
              <li>
                <p>Stocks & IPOs</p>
              </li>
              <li>
                <p>Direct mutual funds</p>
              </li>
              <li>
                <p>Bonds and Govt Securities</p>
              </li>
            </ul>
            <img
              src="/media/images/pressLogos.png"
              alt="PressLogos Image"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
