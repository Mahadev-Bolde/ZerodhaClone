import React from "react";

export default function Footer() {
  return (
    <footer className=" border-top" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} alt="" />
            <p className="my-5">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="fw-bold fs-5 text-muted">Company</p>
            <a href="" className="d-block text-decoration-none text-muted ">
              About
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Products
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Pricing
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Referral programme
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Careers
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Zerodha.tech
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Press & media
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold fs-5 text-muted">Support</p>
            <a href="" className="d-block text-decoration-none text-muted">
              Contact
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Support portal
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              List of charges
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p className="fw-bold fs-5 text-muted">Account</p>
            <a href="" className="d-block text-decoration-none text-muted">
              Open an account
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              Fund transfer
            </a>
            <br />
            <a href="" className="d-block text-decoration-none text-muted">
              60 day challenge
            </a>
            <br />
          </div>
        </div>

        <div className="mt-3 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div className="d-flex  m-3" style={{ fontSize: "14px" }}>
            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                NSE
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                BSE
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                MCX
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                Terms & conditions
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                Policies & procedures
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                Privacy policy
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                Disclosure
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                For investor's attention
              </a>
            </li>

            <li className="list-unstyled ">
              <a href="" className="text-decoration-none text-muted ms-4">
                Investor charter
              </a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}
