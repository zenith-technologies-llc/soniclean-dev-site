import React, { Component } from 'react'
import classNames from 'classnames'
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
import { AppSwitch } from '@coreui/react'
import visa from '../../images/visa.png'
import ae from '../../images/ae.png'

import './PaymentMethod.scss'

class PaymentMethod extends Component {

  onSelect = () => {
    this.props.selectPayment(this.props.index)
  }

  render() {

    const { image, info, name } = this.props.data
    const { selectedIndex, index} = this.props

    return (
      <div className="PaymentMethod mt-2">
           
          <Card className="border-info" onClick={this.onSelect}>
          <CardBody className={classNames('PaymentMethod__card align-items-center text-black ', selectedIndex === index ? 'PaymentMethod__selected': '')}>
                <Row className="align-items-center">
                  <Col sm="12" md="auto"><img src={image} alt="visa" /></Col>
                  <Col sm="12" md="auto">
                    <h6 className="font-weight-normal"> {info}</h6>
                    <h6 className="font-weight-normal mt-2"> {name}</h6>
                  </Col>
              <Col sm="12" md="6" className="text-right"><AppSwitch className={'mx-1 mt-2 align-middle'} color={'success'} checked={selectedIndex===index } disabled label dataOn={'selected'} dataOff={'select'} /></Col>
                </Row>
              </CardBody>
            </Card>
      </div>
    )
  }
}

export default PaymentMethod