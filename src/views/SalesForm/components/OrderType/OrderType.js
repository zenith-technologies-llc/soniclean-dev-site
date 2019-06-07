import React, { Component } from 'react'
import { connect } from "react-redux";
import Stats from '../Stats'
import OrderTypeItem from '../OrderTypeItem'
import ReferralModal from '../ReferralModal'

import { salesformActions } from '../../../../_actions'

import {
    Button,
    Col,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

const data = [
    {
        title: 'BUY INVENTORY',
        description: 'Order Soniclean products in bulk to keep stock in your showroom/warehouse'
    },
    {
        title: 'DIRECT SHIP',
        description: 'Order 1 vacuum at a time to be shipped to directly to your customer or store'
    },
    {
        title: 'REFERRAL SALE',
        description: 'Refer your customer and get credit towards purchases of Soniclean products'
    }
]

class OrderType extends Component {

    constructor (props) {
        super(props)

        this.state = {
            selectedOrderType: null,
            modal: false
        }
    }

    componentDidMount = () => {
        this.setState({ selectedOrderType: this.props.orderType})
    }

    onSelected = (type, selected) => {
        this.setState({ selectedOrderType: type })
        this.props.selectOrderType(type)
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }

  render() {

      const { modal } = this.state
      const { orderType, selectedIndex } = this.props

      return (
          <div className="text-center" >
              <ReferralModal toogle={modal} closeModal={this.toggleModal} />
              <Row className="mt-4">
                  <Col>
                      <h2 className="font-weight-bold text-black">PLEASE SELECT THE TYPE OF ORDER</h2>
                  </Col>
              </Row>
              <Row className="justify-content-center mt-5">
                  {
                      data.map((item, index) => {
                          return (
                              <Col md="4" lg="3" className="mt-3" key={index}>
                                  <OrderTypeItem info={item} selectedIndex={orderType} type={index} onSelected={this.onSelected} />
                              </Col>
                          )
                      })
                  }
              </Row>
              <Row>
                  <Col>
                      {orderType === 2 ? <Button color="primary mt-5" onClick={this.toggleModal} >Continue</Button> : <Stats step={1} {...this.props} activeNextStep={selectedIndex === null || selectedIndex === ''} /> }
                  </Col>
              </Row>
              
          </div>
      )
  }
}

OrderType.propTypes = {

}

const mapStateToProps = ({ salesform }) => {
    const { orderType } = salesform;
    return { orderType };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectOrderType: (orderType) => {
            dispatch(salesformActions.selectOrderType(orderType));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderType);

