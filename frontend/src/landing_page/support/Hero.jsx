import React from "react";

export default function Hero() {
  return (
    <div
      className="container-fluid  my-5 pt-5 pb-5 "
      style={{ backgroundColor: "#F6F6F6" }}>
      <div className="row ">
        <div className="col-6 text-start ps-3">
          <h1>Support Portal</h1>
        </div>
        <div className="col-6 text-end pe-3">
          <button className="btn btn-primary py-2 px-4">My tickets</button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <input
            id="searchInput"
            type="text"
            autocomplete="off"
            placeholder="🔍 Eg: How do I open my account, How do i activate F&amp;O..."
            autofocus=""
            style={{
              width: "100%",
              borderRadius: "5px",
              border: "0.5px solid rgba(87, 86, 85, 0.21)",
              boxShadow: "2px 1px 3px rgba(87, 86, 85, 0.21)",
              outline: "none",
            }}
            className="mt-4 p-3 text-muted "
          />
        </div>
      </div>
    </div>
  );
}
