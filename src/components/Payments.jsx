import React from "react";
import { Row, Col, Pagination, Table } from "react-bootstrap";
import PaymentsSearch from "../components/PaymentsSearch";
import payments from "./paymentsData";
import downArrow from "../assets/images/down-arrow.png";

const Payments = () => {
  const renderTable = (data) => (
    <Table responsive hover className="mt-3">
      <thead>
        <tr>
          <th>Item Type</th>
          <th></th>
          <th>Price</th>
          <th>Transaction No</th>
          <th>Time</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th>
              <span className="circle">VW</span>
            </th>
            <th className="item-name">{item.itemType}</th>
            <th>{item.price}</th>
            <th>{item.transactionNo}</th>
            <th>{item.time}</th>
            <th className={item.status.toLowerCase()}>
              <div className="status-border">&#9679; {item.status}</div>
            </th>
            <th>
              <img src={downArrow} />
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <>
      <h1>Payments</h1>
      <Row className="no-gutters">
        <Col md={4} className="pt-3">
          <span>Showing 20 out of 500 payments</span>
        </Col>
        <Col md={5}>
          <PaymentsSearch />
        </Col>
        <Col md={3}>
          <span>Show </span>
          <select>
            <option value="">All</option>
            <option value="">Reconciled</option>
            <option value="">Unreconciled</option>
            <option value="">Settled</option>
            <option value="">Unsettled</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col>{renderTable(payments)}</Col>
      </Row>
      <Row className="mb-5">
        <Col md={8}>Showing 1-10 of 500 entries</Col>
        <Col md={4}>
          <Pagination className="justify-content-end">
            <Pagination.Item>Previous</Pagination.Item>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </>
  );
};

export default Payments;
