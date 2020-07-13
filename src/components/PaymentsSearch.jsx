import React from "react";
import searchIcon from "../assets/images/Search.png";
import { Form, FormControl } from "react-bootstrap";

const PaymentsSearch = () => (
    <Form inline>
    <img src={searchIcon} />
      <FormControl
        type="text"
        placeholder="Search..."
        className="search-bottom-border mr-sm-2"
      />
    </Form>
);

export default PaymentsSearch;
