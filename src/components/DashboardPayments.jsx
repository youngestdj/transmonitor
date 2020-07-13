import React from "react";

const DashboardPayments = () => (
  <>
    <div className="dashboard-orders">
      <h6>Payments</h6>
      <progress value="80" max="100">
        80%
      </progress>
      <div>
        <span>Unreconciled Payments: </span>
        <span className="yellow">20</span>
      </div>
      <div>
        <span>Reconciled Payments: </span>
        <span className="green">80</span>
      </div>
      <div>
        <span>Total Payments: </span>
        <span className="blue">100</span>
      </div>
    </div>
  </>
);

export default DashboardPayments;
