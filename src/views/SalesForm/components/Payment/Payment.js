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
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,

} from 'reactstrap';

import Stats from '../Stats'
import AddPaymentMethodModal from '../AddPaymentMethodModal'
import PaymentMethod from '../PaymentMethod'

import visa from '../../images/visa.png'
import ae from '../../images/ae.png'
import PaymentShipping from '../PaymentShipping';
import EmailNotification from '../EmailNotification'
import ProductBox from '../ProductBox'
import ProductInfo from '../ProductInfo'
import ScrollTop from '../ScrollTop'

import './Payment.scss'

const PaymentData = [
    {
        image: visa,
        info: 'ending in 4587 EXP: 09 / 21',
        name: 'John Doe'
    },
    {
        image: ae,
        info: 'ending in 9778 EXP: 08 / 20',
        name: 'Jim smith'
    }
]

class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

  render() {

    const { modal } = this.state
    return (
        <div className="text-center mx-auto Payment">
            <ScrollTop />
            <Modal isOpen={modal} toggle={this.toggleModal}
                className={'modal-primary ' + 'modal-md'}>
                <ModalHeader toggle={this.toggleModal}>Add Payment Method</ModalHeader>
                <ModalBody>
                    <AddPaymentMethodModal />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>Submit</Button>
                    <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Row className="justify-content-center mt-2">
                <Col md="12" lg="10">
                    <Row>
                        <Col xs="12" md="7" className="text-left">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="font-weight-bold text-primary"> Payment Method </h2>
                                <Button color="primary" onClick={this.toggleModal}><i className="fa fa-plus-circle fa-md mr-3"></i>Add Payment</Button>
                            </div>
                            {
                                PaymentData.map((item, index) => {
                                    return <PaymentMethod data={item} key={index} />
                                })
                            }
                            <hr />
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="font-weight-bold text-primary"> Shipping Information </h2>
                            </div>
                            <PaymentShipping />
                            <hr />
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h2 className="font-weight-bold text-primary"> Email Notification </h2>
                            </div>
                            <EmailNotification />
                        </Col>
                        <Col xs="12" md="5">
                            <Card className="card-accent-primary mt-mobile-5 ">
                            <CardHeader>Order Summary</CardHeader>
                            <CardBody>
                                    <ProductBox />
                                    <hr />
                                    <ProductBox />
                                    <hr />
                                    <ProductInfo />
                            </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Stats step={4} {...this.props} />
        </div>
    )
  }
}

export default Payment