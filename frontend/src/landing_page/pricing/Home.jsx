import React from "react";

export default function Home() {
  return (
    <div className="container  pt-5">
      <div className="row border-bottom mt-5 p-5 text-center">
        <h2>Charges</h2>
        <h5 className="text-muted mt-3">List of all charges and taxes</h5>
      </div>
      <div className="row mt-5 p-3 text-center">
        <div className="col-4 p-2 ">
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            style={{ width: "250px" }}
          />
          <h2 className="mt-4 fs-3">Free equity delivery</h2>
          <p className="mt-4 text-muted">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-2">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ width: "255px" }}
          />
          <h2 className="mt-4  fs-3">Intraday and F&O trades</h2>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-2">
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            style={{ width: "250px" }}
          />
          <h2 className="mt-4  fs-3">Free direct MF</h2>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <h1 className="mt-5 ">Open a Zerodha account</h1>
        <p className="my-3">
          Modern platform and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}>
          Sign up Now
        </button>
      </div>
    </div>
  );
}
