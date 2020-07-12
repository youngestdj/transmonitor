import React from "react";
import { Col, Row } from "react-bootstrap";
import TransactionSummaryCard from "./TransactionSummaryCard";

const TransactionSummaryRow = () => (
  <Row>
    <Col lg={6} className="border-red">
      <div className="mr-3">
        <Row>
          <Col sm={6}>
            <TransactionSummaryCard
              title="Daily transaction Volume"
              value="2,342"
            />
          </Col>
          <Col sm={6}>
            <TransactionSummaryCard
              title="Daily transaction Value"
              value="&#8358;4,000,000"
            />
          </Col>
        </Row>
      </div>
    </Col>
    <Col lg={6} className="border-red">
      <div className="ml-3">
        <Row>
          <Col sm={6}>
            <TransactionSummaryCard
              title="Daily transaction Volume"
              value="452,000"
            />
          </Col>
          <Col sm={6}>
            <TransactionSummaryCard
              title="Daily transaction Value"
              value="&#8358;4,000,000"
            />
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

export default TransactionSummaryRow;
