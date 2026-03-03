import React from "react";

export default function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" className="text-decoration-none">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul className="text-start lh-lg text-muted mt-5 fs-6">
            <li>
              Call & Trade and RMS auto-squareoff: Additional of ₹50+ GST per
              order.
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copy of contract notes, if required, shall be charges ₹20
              per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PSI), 0.5% or ₹100 per executed order for
              equity(whichever is lower).
            </li>
            <li>
              if the account is in the debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" className="text-decoration-none">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
