import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import Stats from '../Stats'
import ProductCard from '../ProductCard'

import './SelectProduct.scss'

import p1 from '../../images/p1.png'
import p9 from '../../images/p9.png'
import p6 from '../../images/p6.png'
import p8 from '../../images/p8.png'
import p7 from '../../images/p7.png'
import p10 from '../../images/p10.png'
import p11 from '../../images/p11.png'

const data = [
    {
        price: '235.00',
        unit: 'unit',
        tooltip: 'Soniclean Soft Carpet Vacuum',
        name: 'Soniclean Soft Carpet Vacuum',
        description: '(Model: SFC-7000)',
        image: p1,
        multiples: 2,
    },
    {
        price: '21.50',
        unit: 'package',
        tooltip: 'Upright HEPA Filter Bags',
        name: 'Upright HEPA Filter Bags',
        description: '(8 Pack)',
        image: p9,
        multiples: 4
    },
    {
        price: '16.50',
        unit: 'package',
        tooltip: 'Sonicfresh Fragrance Pods',
        name: 'Sonicfresh Fragrance Pods',
        description: '(8 Pack)',
        image: p6,
        multiples: 4
    },
    {
        price: '85.00',
        unit: 'package',
        tooltip: 'Soniclean Handheld Vacuum',
        name: 'Soniclean Handheld Vacuum',
        description: '(Model: HH-0800)',
        image: p8,
        multiples: 2
    },
    {
        price: '16.50',
        unit: 'package',
        tooltip: 'Handheld HEPA Filter Bags',
        name: 'Handheld HEPA Filter Bags',
        description: '(8 Pack)',
        image: p7,
        multiples: 4
    }
]

const marketingData = [
    {
        price: '235.00',
        unit: 'unit',
        tooltip: 'Showroom Display Stand (Mohawk)',
        name: 'Showroom Display Stand (Mohawk)',
        description: '*Does not include vacuum',
        image: p10,
        multiples: 2,
    },
    {
        price: '21.50',
        unit: 'package',
        tooltip: 'Soniclean Marketing Brochures',
        name: 'Soniclean Marketing Brochures',
        description: '(30 brochures per pack)',
        image: p11,
        multiples: 4
    }
]

class SelectProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDirectShipIndex:[],
            selectedBuyInventoryIndex: [],
            selectedmarketingIndex: []
        }
    }

    onSelectProduct = (selectedIndex, selected) => {
       
        if(this.props.orderType===1) {
            if (selected === true) {
                this.state.selectedDirectShipIndex.push(selectedIndex);
                this.setState({ selectedIndex: this.state.selectedDirectShipIndex })
            } else {
                var index = this.state.selectedDirectShipIndex.indexOf(selectedIndex);
                if (index !== -1) this.state.selectedDirectShipIndex.splice(index, 1);
                this.setState({ selectedDirectShipIndex: this.state.selectedDirectShipIndex })

            }
        } else if (this.props.orderType === 0) {
            if (selected === true) {
                this.state.selectedBuyInventoryIndex.push(selectedIndex);
                this.setState({ selectedIndex: this.state.selectedBuyInventoryIndex })
            } else {
                var index = this.state.selectedBuyInventoryIndex.indexOf(selectedIndex);
                if (index !== -1) this.state.selectedBuyInventoryIndex.splice(index, 1);
                this.setState({ selectedBuyInventoryIndex: this.state.selectedBuyInventoryIndex })
            }
        } else if (this.props.orderType === 2) {
            if (selected === true) {
                this.state.selectedmarketingIndex.push(selectedIndex);
                this.setState({ selectedIndex: this.state.selectedmarketingIndex })
            } else {
                var index = this.state.selectedmarketingIndex.indexOf(selectedIndex);
                if (index !== -1) this.state.selectedmarketingIndex.splice(index, 1);
                this.setState({ selectedmarketingIndex: this.state.selectedmarketingIndex })
            }
        }
    }


    render() {
        const containerStyle = {
            zIndex: 1999
        };
        const { orderType } = this.props;    
        return (
            <div className="text-center SelectProduct mx-auto " >
                <Row className="align-items-center mt-4">
                    <Col>
                    {
                            orderType === 0 ? <h2 className="font-weight-bold text-black">BUY INVENTORY</h2> :
                                orderType === 1 ? <h2 className="font-weight-bold text-black">Direct Ship</h2> :
                                    orderType === 2 ? <h2 className="font-weight-bold text-black">Select Products</h2> : null
                    }
                        
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col lg="9" sm="12" >
                    {
                            orderType === 0 ? <h5 className="font-weight-normal">This form allows you to order inventory for your store. Vacuum are sold in multiples of 2 and accessories are sold by the case; one case contains 4 packages of accessories. For pricing and shipping information, click the <i className="fa fa-info-circle fa-md text-info ProductCard__info"></i> in the top right corner of the product listing.</h5> :
                                orderType === 1 ? <h5 className="font-weight-normal">This order form allows you place an order containing a maximum of 1 of each type of vacuum and a maximum of 1 package of each type of accessory. Direct ship orders can be shipped to your customers or to your store location. You will need your company's credit/debit card information to process this order. All prices include freight for orders with shipping addresses within the contiguous US.</h5> : null
                    }
                        
                    </Col>
                </Row>
                <Row className="justify-content-center mt-3" >
                    <Col sm="12" md="9" >
                        <Row className="mx-auto">
                            {
                                orderType===0 || orderType===1 ?
                                    data.map((item, index) => {
                                        return (
                                            <Col xs="12" sm="6" md="6" lg="4" className="mt-4"  key={index}>
                                                <ProductCard onSelectProduct={this.onSelectProduct} productIndex={index} data={item} type={orderType===0 ? "multiple": "check"} />
                                            </Col>
                                        )
                                    }) :
                                    orderType===2 ? 
                                        marketingData.map((item, index) => {
                                            return (
                                                <Col xs="12" sm="6" md="6" lg="4" key={index}>
                                                    <ProductCard onSelectProduct={this.onSelectProduct} productIndex={index} data={item} type={index === 0 ? "multiple" : "check"} />
                                                </Col>
                                            )
                                        }) : null

                            }
                        </Row>
                    </Col>
                </Row>
                
                <Stats 
                    step={2} 
                    {...this.props} 
                    activeNextStep={
                        orderType === 1 ? this.state.selectedDirectShipIndex.length === 0 : 
                        orderType === 0 ? this.state.selectedBuyInventoryIndex.length===0: 
                        orderType === 2 ? this.state.selectedmarketingIndex.length===0: false
                } />
            </div>
        )
    }
}


SelectProduct.propTypes = {

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
)(SelectProduct);

