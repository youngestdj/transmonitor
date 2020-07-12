import React from "react";
import { Col, Row } from "react-bootstrap";

const TransactionSummaryCard = ({ title, value }) => (
  <div className="mr-1 border-red summary-item-tab">
    <Row>
      <Col md={9}>
        <div className="transaction-title">{title}</div>
        <div className="transaction-value">{value}</div>
      </Col>
      <Col md={3}>Graph</Col>
    </Row>
  </div>
);

export default TransactionSummaryCard;
