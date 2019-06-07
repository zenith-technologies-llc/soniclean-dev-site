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
import p6 from '../../images/p6.png'
import './ProductBox.scss'

class ProductBox extends Component {
  render() {
    return (
      <Row className="ProductBox align-items-center">
        <Col md="4">
            <img src={p6} alt="p1" className="img-fluid" />
        </Col>
        <Col className="text-black text-right" md="8">
                <h6 className="font-weight-normal">Soniclean Soft Carpet Vacuum</h6>
                <h6 className="mt-1">$225/unit</h6>
                <h6 className="mt-1">QTY: 2</h6>
        </Col>
      </Row>
    )
  }
}

export default ProductBox