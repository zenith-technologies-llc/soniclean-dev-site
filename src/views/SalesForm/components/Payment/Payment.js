import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
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
import PromoCode from '../PromoCode'
import ScrollTop from '../ScrollTop'

import './Payment.scss'

const PaymentData = [
    {
        image: visa,
        info: 'ending in •••• 2723',
        name: 'Exp: 09 / 19'
    },
    {
        image: ae,
        info: 'ending in •••• 2723',
        name: 'Exp: 09 / 19'
    }
]

class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            selectedPayment: null
        }
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    onSelectPayment= (index) => {
        this.setState({selectedPayment: index})
    }

    prevStep = () => {
        this.props.previousStep()
    }

  render() {

    const { modal, selectedPayment } = this.state

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
                                <h3 className="font-weight-normal text-black"> Payment Method </h3>
                                <Button color="primary" onClick={this.toggleModal}><i className="fa fa-plus-circle fa-md mr-3"></i>Add Payment</Button>
                            </div>
                            {
                                PaymentData.map((item, index) => {
                                    return <PaymentMethod 
                                            data={item} 
                                            key={index} 
                                            index={index} 
                                            selectPayment={this.onSelectPayment} 
                                            selectedIndex={selectedPayment}
                                            />
                                })
                            }
                            <hr />
                            <PaymentShipping type={this.props.shippinginfor} SW={this.prevStep} />
                            <hr />
                            <EmailNotification />
                        </Col>
                        <Col xs="12" md="5">
                            <Card className="card-accent-primary mt-mobile-5 ">
                                <CardHeader><h4 className="font-weight-normal text-black">Order Summary</h4></CardHeader>
                            <CardBody>
                                <ProductBox />
                                <hr />
                                <ProductBox />
                                <hr />
                                <PromoCode />
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


const mapStateToProps = ({ salesform }) => {
    const { orderType, shippinginfor } = salesform;
    return { orderType, shippinginfor };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSelectShippingInfor: (orderType) => {
//             dispatch(salesformActions.selectShippingInfor(orderType));
//         }
//     }
// }

export default connect(
    mapStateToProps,
    null
)(Payment);