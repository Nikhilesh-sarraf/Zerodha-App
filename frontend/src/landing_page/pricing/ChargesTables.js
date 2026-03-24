import React from "react";
import "./ChargesTables.css";

function ChargesTables() {
  return (
    <div className="tables-wrapper" style={{ marginBottom: "20px" }}>
      {/* Table 1 */}
      <h2>Charges for account opening</h2>
      <table className="custom-table" style={{ marginBottom: "70px" }}>
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td>
              <span className="badge free">FREE</span>
            </td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td>
              <span className="badge free">FREE</span>
            </td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹500</td>
          </tr>
        </tbody>
      </table>

      {/* Table 2 */}
      <h2>Demat AMC (Annual Maintenance Charge)</h2>
      <table className="custom-table" style={{ marginBottom: "70px" }}>
        <thead>
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td>
              <span className="badge free">FREE*</span>
            </td>
          </tr>
          <tr>
            <td>₹4 lakh - ₹10 lakh</td>
            <td>₹100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300 per year, charged quarterly</td>
          </tr>
        </tbody>
      </table>

      <p className="note">
        Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA).
      </p>

      {/* Table 3 */}
      <h2>Charges for optional value added services</h2>
      <table className="custom-table" style={{ marginBottom: "70px" }}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Personal: Free</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{fontSize:"25px", fontWeight:400}}>Disclaimer</h2>
      <p style={{fontSize:"16px", fontWeight:400, marginBottom:"20px"}}>
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes will
        be charged ₹20 per contract note plus courier charges. Brokerage will
        not exceed the rates specified by SEBI and the exchanges. All statutory
        and regulatory charges will be levied at actuals. Brokerage is also
        charged on expired, exercised, and assigned options contracts. Free
        investments are available only for our retail individual clients.
        Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
        (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
        contract value will be charged for contracts where physical delivery
        happens. For netted off positions in physically settled contracts, a
        brokerage of 0.1% will be charged.
      </p>
    </div>
  );
}

export default ChargesTables;
