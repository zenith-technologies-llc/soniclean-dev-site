import React, { Component } from 'react'
import { connect } from "react-redux";

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
import OrderTypeItem from '../OrderTypeItem'
import InformationForm from '../InformationForm'
import LocationForm from '../LocationForm'
import Stats from '../Stats'

import man from '../../images/man.png'
import man2 from '../../images/man2.png'
import house from '../../images/house.png'
import house2 from '../../images/house2.png'

import './ShippingInformation.scss'

const data = [
    {
        image: man,
        hoverImage: man2,
        title: 'SHIP TO CUSTOMER',
        description: ''
    },
    {
        image: house,
        hoverImage: house2,
        title: 'SHIP TO STORE',
        description: ''
    }
]


class ShippingInformation extends Component {

    state = {
        selectedIndex: null
    }

    onSelected = (index) => {
        this.setState({ selectedIndex: index })
    }

    render() {

        const { selectedIndex } = this.state
        const { orderType } = this.props

        return (
            <div className="text-center ShippingInformation mx-auto">
                <Row className="align-items-center mt-4">
                    <Col>
                        <h2 className="font-weight-bold text-primary"> SHIPPING INFORMATION </h2>
                    </Col>
                </Row>
                {
                    orderType===1 ?
                    <>
                        <Row className="justify-content-center mt-2">
                                <Col lg="10" sm="12">
                                    <Row className="justify-content-around">
                                    {
                                        data.map((item, index) => {
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
                            <Col lg="10" sm="12">
                                <Row>
                                    <Col xs="12">
                                        {selectedIndex === 0 ? <InformationForm /> : selectedIndex === 1 ? <LocationForm /> : ''}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        </> : 
                        <div className="mt-5">
                            <LocationForm />
                        </div>

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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectOrderType: (orderType) => {
//             dispatch(salesformActions.selectOrderType(orderType));
//         }
//     }
// }

export default connect(
    mapStateToProps,
    null
)(ShippingInformation);

