import React from "react";

export default function Team() {
  return (
    <div className="container mt-5 mb-5 pt-4">
      <h2 className="text-center mb-5 fs-4 text-muted">People</h2>
      <div className="row mt-5 pt-5">
        <div className="col-5 ms-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            className="rounded-circle"
            style={{ width: "60%" }}
          />
          <h5>Nitin Kamatha</h5>
          <p
            className="text-grey"
            style={{ fontSize: "15px", lineHeight: "50px" }}>
            Founder, CEO
          </p>
        </div>
        <div className="col-6 text-muted ">
          <p className="lh-lg">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="lh-lg">Playing basketball is his zen.</p>
          <p>
            Connect on
            <a href="" className="text-decoration-none">
              &nbsp; Homepage &nbsp;
            </a>
            /
            <a href="" className="text-decoration-none">
              &nbsp;TradingQnA &nbsp;
            </a>
            /{" "}
            <a href="" className="text-decoration-none">
              &nbsp;Twitter &nbsp;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
