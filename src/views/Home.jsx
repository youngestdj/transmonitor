/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import DashboardMain from "../components/DashbaordMain";

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
        </Container>
      </Row>
    </Container>
  </>
);

export default Home;
