import React from "react";

export default function CreateTicket() {
  return (
    <div class="container-fluid py-5 px-4">
      <div class="row g-4">
        {/* <!-- LEFT SECTION --> */}
        <div class="col-lg-8 ">
          <div class="accordion" id="supportAccordion">
            <div class="accordion-item mb-5">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-bold text-muted "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#one">
                  <i class="fa-solid fa-plus"></i>
                  &nbsp;&nbsp;&nbsp; Account Opening
                </button>
              </h2>
              <div id="one" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column  gap-3 p-5">
                  <a href="" className="text-decoration-none">
                    <li> Resident individual</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Minor</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Non Resident Indian (NRI) </li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Company, Partnership, HUF and LLP</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Glossary</li>
                  </a>
                </div>
              </div>
            </div>

            <div class="accordion-item  mb-5">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-bold text-muted"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#two">
                  <i class="fa-solid fa-user"></i> &nbsp;&nbsp;&nbsp; Your
                  Zerodha Account
                </button>
              </h2>
              <div id="two" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column  gap-3 p-5">
                  <a href="" className="text-decoration-none">
                    <li> Your Profile</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Account modification</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>
                      Client Master Report (CMR) and Depository Participant (DP)
                    </li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Nomination</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Transfer and conversion of securities</li>
                  </a>
                </div>
              </div>
            </div>

            <div class="accordion-item  mb-5">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-bold text-muted"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#three">
                  <i class="fa-brands fa-square-pied-piper"></i>
                  &nbsp;&nbsp;&nbsp; Kite
                </button>
              </h2>
              <div id="three" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column  gap-3 p-5">
                  <a href="" className="text-decoration-none">
                    <li>IPO</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Trading FAQs</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Margin Trading Facility (MTF) and Margins</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Charts and orders</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Alerts and Nudges</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>General</li>
                  </a>
                </div>
              </div>
            </div>

            <div class="accordion-item  mb-5">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-bold text-muted"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#four">
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  &nbsp;&nbsp;&nbsp; Funds
                </button>
              </h2>
              <div id="four" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column  gap-3 p-5">
                  <a href="" className="text-decoration-none">
                    <li>Add money</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Withdraw money</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Add bank accounts</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>eMandates</li>
                  </a>
                </div>
              </div>
            </div>

            <div class="accordion-item  mb-5">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-bold text-muted"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#five">
                  <i class="fa-solid fa-square"></i>
                  &nbsp;&nbsp;&nbsp; Console
                </button>
              </h2>
              <div id="five" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column  gap-3 p-5">
                  <a href="" className="text-decoration-none">
                    <li>Portfolio</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Corporate actions</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Funds statement</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Reports</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Profile</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li> Segments</li>
                  </a>
                </div>
              </div>
            </div>

            <div class="accordion-item  mb-5">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed fw-bold text-muted"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#six">
                  <i class="fa-solid fa-circle"></i>
                  &nbsp;&nbsp;&nbsp; Coin
                </button>
              </h2>
              <div id="six" class="accordion-collapse collapse">
                <div class="accordion-body d-flex flex-column  gap-3 p-5">
                  <a href="" className="text-decoration-none">
                    <li> Mutual funds</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>National Pension Scheme (NPS)</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>Features on Coin</li>
                  </a>

                  <a href="" className="text-decoration-none">
                    <li>Payments and Orders</li>
                  </a>
                  <a href="" className="text-decoration-none">
                    <li>General</li>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- RIGHT SECTION --> */}
        <div class="col-lg-4 ">
          {/* <!-- Info Box --> */}
          <div
            class="p-3 mb-4 info-box  "
            style={{
              borderLeft: "10px solid #FF9100",
              backgroundColor: "#FFF4E5",
            }}>
            <ul class="mb-0">
              <li>
                <a href="#" class="text-decoration-none">
                  Latest Intraday leverages and square-off timings
                </a>
              </li>
              <li class="mt-2">
                <a href="#" class="text-decoration-none">
                  Rights Entitlements listing in December 2025
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Quick Links --> */}
          <div class="card rounded-0 ">
            <div
              class="card-header fw-semibold py-3 text-muted"
              style={{ backgroundColor: "#F6F6F6" }}>
              Quick links
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item py-3">
                <a href="" className="text-decoration-none">
                  1. Track account opening
                </a>
              </li>
              <li class="list-group-item py-3">
                <a href="" className="text-decoration-none">
                  2. Track segment activation
                </a>
              </li>
              <li class="list-group-item py-3">
                <a href="" className="text-decoration-none">
                  3. Intraday margins
                </a>
              </li>
              <li class="list-group-item py-3">
                <a href="" className="text-decoration-none">
                  4. Kite user manual
                </a>
              </li>
              <li class="list-group-item py-3">
                <a href="" className="text-decoration-none">
                  5. Learn how to create a ticket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
