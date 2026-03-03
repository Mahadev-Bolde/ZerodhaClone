import React from "react";

export default function RightSection({
  imgURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 d-flex flex-column justify-content-center gap-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-5 text-center ">
          <img src={imgURL} />
        </div>
      </div>
    </div>
  );
}
