import React from "react";
import { Col, Row } from "react-bootstrap";
import TrasactionSummaryRow from "./TransactionSummaryRow";

const DashboardOrders = () => (
  <>
    <div className="dashboard-orders">
      <h6>Orders</h6>
      <progress value="80" max="100">
        80%
      </progress>
      <div>
        <span>Pending Orders: </span>
        <span className="yellow">20</span>
      </div>
      <div>
        <span>Reconciled Orders: </span>
        <span className="green">80</span>
      </div>
      <div>
        <span>Total Orders: </span>
        <span className="blue">100</span>
      </div>
    </div>
  </>
);

export default DashboardOrders;
