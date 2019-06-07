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

    state = {
        selected: false
    }

  onSelect = () => {
      this.setState({ selected: !this.state.selected })
  }

  render() {

    const { selected } = this.state
    const { image, info, name } = this.props.data

    return (
      <div className="PaymentMethod mt-2">
           
            <Card className="border-info">
          <CardBody className={classNames('PaymentMethod__card align-items-center text-black ', selected ? 'PaymentMethod__selected': '')}>
                <Row>
                  <Col sm="12" md="2"><img src={image} alt="visa" /></Col>
                  <Col sm="12" md="6"><h6 className="text-uppercase font-weight-normal mt-2"> {info}</h6></Col>
                  <Col sm="12" md="3"><AppSwitch className={'mx-1 mt-2 align-middle'} color={'success'} checked={selected} onChange={this.onSelect} label dataOn={'selected'} dataOff={'select'} /></Col>
                </Row>
              </CardBody>
            </Card>
      </div>
    )
  }
}

export default PaymentMethod