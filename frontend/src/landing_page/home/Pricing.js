import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container">
  <div className="row align-items-center">

    <div className="col-md-5 text-start mt-4">
      <h2>Unbeatable pricing</h2>
      <p>
        We pioneered the concept of discount broking and price transparency
        in India. Flat fees and no hidden charges.
      </p>
      <a href="/">
        See pricing <i className="bx bx-right-arrow-alt"></i>
      </a>
    </div>

    <div className="col-md-7 d-flex justify-content-between text-center">

      <div className="pricing">
        <img src="/media/images/pricing0.svg" alt="Free account" />
        <p>Free account opening</p>
      </div>

      <div className="pricing">
        <img src="/media/images/pricingEquity.svg" alt="Equity" />
        <p>Free equity delivery and direct mutual funds</p>
      </div>

      <div className="pricing">
        <img src="/media/images/intradayTrades.svg" alt="Intraday" />
        <p>Intraday and F&O</p>
      </div>

    </div>

  </div>
</div>
  );
}

export default Pricing;
