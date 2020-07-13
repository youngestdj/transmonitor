import React from "react";
import { Col } from "react-bootstrap";
import TrasactionSummaryRow from "./TransactionSummaryRow";

const DashboardMain = () => (
  <>
    <Col lg={{ span: 10, offset: 2 }} className="dashboard-main">
      <TrasactionSummaryRow />
    </Col>
  </>
);

export default DashboardMain;
