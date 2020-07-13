import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";
import GraphLarge from "./GraphLarge";

const DashboardChart = () => (
  <>
    <div className="dashboard-chart">
      <Container fluid>
        <Row>
          <Col md={7}>
            <span className="date">Today: 5, Aug 2018</span>
          </Col>
          <Col md={3}>
            <select>
              <option>1 Jan - 1 Jun</option>
            </select>
          </Col>
          <Col md={2}>
            <img src={left} />
            <img src={right} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GraphLarge />
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default DashboardChart;
