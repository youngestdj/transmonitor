import React from "react";
import { Col, Row } from "react-bootstrap";

const TransactionSummaryCard = ({ title, value, graph }) => (
  <div className="mr-1 summary-item-tab">
    <Row>
      <Col md={8}>
        <div className="transaction-title">{title}</div>
        <div className="transaction-value">{value}</div>
      </Col>
      <Col md={4}>{graph}</Col>
    </Row>
  </div>
);

export default TransactionSummaryCard;
