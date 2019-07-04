import React, { Component } from 'react'
import { connect } from "react-redux";

import {
    Col,
    Row,
} from 'reactstrap';
import OrderTypeItem from '../OrderTypeItem'
import InformationForm from '../InformationForm'
import LocationForm from '../LocationForm'
import Stats from '../Stats'

import { selectShippingInfor } from 'modules/salesform'
import * as Constants from '_config/constants'

import './ShippingInformation.scss'


class ShippingInformation extends Component {

    state = {
        selectedIndex: null
    }

    onSelected = (index) => {
        this.setState({ selectedIndex: index })
        this.props.onSelectShippingInfor(index)
    }

    render() {

        const { selectedIndex } = this.state
        const { orderType } = this.props

        return (
            <div className="text-center ShippingInformation mx-auto">
                <Row className="align-items-center mt-4">
                    <Col>
                        <h2 className="font-weight-bold text-black"> SHIPPING INFORMATION </h2>
                    </Col>
                </Row>
                {
                    orderType===1 ?
                    <>
                        <Row className="justify-content-center mt-2">
                                <Col lg="8" sm="12">
                                    <Row className="justify-content-around">
                                    {
                                            Constants.shippinginforType.map((item, index) => {
                                            return (
                                                <Col xs="12" sm="4" md="5" className="mt-3" key={index}>
                                                    <OrderTypeItem info={item} type={index} selectedIndex={selectedIndex} onSelected={this.onSelected} />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mt-2">
                            <Col lg="8" sm="12">
                                <Row>
                                    <Col xs="12">
                                        {selectedIndex === 0 ? <InformationForm /> : selectedIndex === 1 ? <LocationForm /> : ''}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        </> : 
                        <Row className="justify-content-center mt-2">
                            <Col lg="8" sm="12">
                                <Row>
                                    <Col xs="12">
                                        <LocationForm />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                }
                
                <Stats step={3} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = ({ salesform }) => {
    const { orderType } = salesform;
    return { orderType };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectShippingInfor: (orderType) => {
            dispatch(selectShippingInfor(orderType));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShippingInformation);

