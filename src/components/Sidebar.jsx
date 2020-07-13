import React from "react";
import { Col, Button, Nav } from "react-bootstrap";
import overview from "../assets/images/overview.png";
import payments from "../assets/images/wallet-43.png";
import rpayments from "../assets/images/rpayments.png";
import urpayments from "../assets/images/urpayments.png";
import msettlement from "../assets/images/ic_fiber_manual_record_48px.png";
import allorders from "../assets/images/all_orders.png";
import porders from "../assets/images/p_orders.png";
import rorders from "../assets/images/r_orders.png";
import mprofile from "../assets/images/m_profile.png";


const Sidebar = () => (
  <>
    <Col lg={2} className="sidebar d-none d-lg-block">
      <Button className="g-invoice">GENERATE INVOICE</Button>
      <Nav>
        <Nav.Item>
          <h6>Main</h6>
        </Nav.Item>
        <Nav.Item className="active">
          <img src={overview} alt="overview" />
          <Nav.Link href="/home">Overview</Nav.Link>
        </Nav.Item>
       
        <Nav.Item>
          <h6>Payments</h6>
        </Nav.Item>
        <Nav.Item>
          <img src={payments} alt="payments" />
          <Nav.Link eventKey="link-1">All payments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={rpayments} alt="r_payments" />
          <Nav.Link eventKey="link-2">Reconciled payments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={urpayments} alt="ur_payments" />
          <Nav.Link eventKey="link-2">Un - Reconciled payments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={msettlement} alt="msettlement" />
          <Nav.Link eventKey="link-2">Manual settlement</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <h6>Orders</h6>
        </Nav.Item>
        <Nav.Item>
          <img src={allorders} alt="all_orders" />
          <Nav.Link eventKey="link-1">All Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={porders} alt="p_orders" />
          <Nav.Link eventKey="link-2">Pending Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <img src={rorders} alt="r_orders" />
          <Nav.Link eventKey="link-2">Reconciled Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item className="mt-3">
          <img src={mprofile} alt="m_profile" />
          <Nav.Link eventKey="link-2">Merchant Profile</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Col>
  </>
);

export default Sidebar;
