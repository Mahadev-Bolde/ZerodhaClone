import React from "react";

export default function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-7 p-5 text-center">
          <img src={imgURL} alt="Product image" />
        </div>
        <div className="col-5 p-5 d-flex flex-column justify-content-center gap-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none me-5">
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay} className="me-5">
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
