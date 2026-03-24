import React from "react";
import './CreateTicket.css'

function CreateTicket() {
  return (
    <div className="container my-5">

      <div className="accordion custom-accordion" id="supportAccordion">

        {/* Account Opening */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <span className="icon-box">
              <i class='bx bx-plus-circle'></i>
              </span>
              Account Opening
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Resident individual</li>
                <li>Minor</li>
                <li>Non Resident Indian (NRI)</li>
                <li>Company, Partnership, HUF and LLP</li>
                <li>Glossary</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Zerodha Account */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <span className="icon-box">
                <i class='bx bx-user-circle'></i>
              </span>
              Your Zerodha Account
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Your Profile</li>
                <li>Account modification</li>
                <li>Client Master Report (CMR) and DP</li>
                <li>Nomination</li>
                <li>Transfer and conversion of securities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Kite */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <span className="icon-box">
                <i class='bx bx-support' ></i>
              </span>
              Kite
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>IPO</li>
                <li>Trading FAQs</li>
                <li>MTF and Margins</li>
                <li>Charts and orders</li>
                <li>Alerts and Nudges</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Funds */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              <span className="icon-box">
                <i class='bx bx-dollar-circle' ></i>
              </span>
              Funds
            </button>
          </h2>

          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Add money</li>
                <li>Withdraw money</li>
                <li>Add bank accounts</li>
                <li>eMandates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Console */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              <span className="icon-box">
         <i class='bx bxs-analyse'></i>
              </span>
              Console
            </button>
          </h2>

          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Portfolio</li>
                <li>Corporate actions</li>
                <li>Funds statement</li>
                <li>Reports</li>
                <li>Profile</li>
                <li>Segments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coin */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
            >
              <span className="icon-box">
              <i class='bx bxl-bitcoin'></i>
              </span>
              Coin
            </button>
          </h2>

          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>Mutual funds</li>
                <li>National Pension Scheme (NPS)</li>
                <li>Fixed Deposit (FD)</li>
                <li>Features on Coin</li>
                <li>Payments and Orders</li>
                <li>General</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;