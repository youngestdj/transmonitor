/* eslint-disable react/jsx-no-bind */
import React from "react";
import Header from "../components/Header";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashbaordMain";
import DashboardChart from "../components/DashboardChart";
import DashboardOrders from "../components/DashboardOrders";
import DashboardPayments from "../components/DashboardPayments";
import Payments from "../components/Payments";
import GraphMini from "../components/GraphMini";


const Home = () => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Sidebar />
        <Container fluid>
          <Row>
            <DashboardMain />
          </Row>

          <Row>
            <Col
              lg={{ span: 10, offset: 2 }}
              className="dashboard-chart-section"
            >
              <Container fluid>
                <Row>
                  <Col md={8}>
                    <DashboardChart />
                  </Col>
                  <Col md={4}>
                    <Row className="mb-2">
                      <Col md={12}>
                        <DashboardOrders />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <DashboardPayments />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col
              lg={{ span: 10, offset: 2 }}
              className="payments-section"
            >
              <Container fluid>
                <Row>
                  <Col md={12}>
                    <Payments />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  </>
);

export default Home;
