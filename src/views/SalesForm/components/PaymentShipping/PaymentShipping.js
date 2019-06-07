import React, { Component } from 'react'
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
} from 'reactstrap';

class PaymentShipping extends Component {
  render() {
    return (
        <>
      <div className="d-flex justify-content-between align-items-center">
            <h6 className="text-black font-weight-normal pr-5">Carpet ABC, Inc 6550 N. Federal Hwy Fort Lauderdale, FL 33308</h6>
            <Button color="primary"> Edit </Button>
      </div>
      <div>
            <h6 className="text-black mt-3">FEDEX 3-5 Business Days</h6>
      </div>
      </>
    )
  }
}

export default PaymentShipping