import React, { Component } from 'react';
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
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    UncontrolledTooltip,
    Tooltip,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import ProductInformationModal from '../ProductInformationModal'

import p1 from '../../images/p1.png'

import './ProductCard.scss'

class ProductCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            quantity: 0,
            modal: false
        }
    }

    onSelect = (index) => {
        if (this.props.type !=='multiple') {
            this.setState({ selected: !this.state.selected })
            this.props.onSelectProduct(index, !this.state.selected)
        }
    }

    onPlus = (index) => {
        this.setState({ quantity: this.state.quantity + this.props.data.multiples})
        if(this.state.quantity===0) {
            this.setState({ selected: true })
            this.props.onSelectProduct(index, true)
        }
    }

    onMinus = (index) => {
        if (this.state.quantity !== 0) {
            this.setState({ quantity: this.state.quantity - this.props.data.multiples })
        }
        if (this.state.quantity === this.props.data.multiples) {
            this.setState({ selected: false })
            this.props.onSelectProduct(index, false)
        }
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {

        const { productIndex, data, type } = this.props
        const { selected, modal } = this.state

        return (
            <div className="ProductCard w-100 h-100 " >
                <Row className="h-100">
                    <Col >
                        <Card className={classNames('w-100 h-100', selected ? "card-accent-primary":"")}>
                            <CardHeader className="text-left" >
                                <span className="h5">${data.price}/{data.unit}</span>
                                <div className="card-header-actions">
                                    <i className="fa fa-info-circle fa-lg text-info ProductCard__info" id={"info" + productIndex} onClick={this.toggleModal} ></i>
                                    <Modal isOpen={modal} toggle={this.toggleModal}
                                        className={'modal-primary ' + 'modal-lg'}>
                                        <ModalHeader toggle={this.toggleModal}>Product Information</ModalHeader>
                                        <ModalBody>
                                            <ProductInformationModal />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </CardHeader>
                            <CardBody onClick={()=>this.onSelect(productIndex)} className="align-middle">
                                <div className="ProductCard__imagebox d-flex align-items-center justify-content-center mt-3">
                                    <img src={data.image} alt="data.name" className="img-fluid" />
                                </div>
                                <div className="mt-4">
                                <h5 >{data.name}</h5>
                                <h6 className="mt-2">{data.description}</h6>
                                </div>
                            </CardBody>
                            <CardFooter className="d-flex align-items-center justify-content-center">
                                {
                                    type==='check' ?
                                    <>
                                        <AppSwitch className={'mx-1'} color={'success'} checked={selected} onChange={this.onSelect} label dataOn={'selected'} dataOff={'select'} />
                                    </> : 
                                    <>
                                            <InputGroup>
                                                <InputGroupAddon addonType="prepend">
                                                    <Button type="button" color="primary" onClick={() => this.onMinus(productIndex)}><i class="fa fa-minus fa-sm"></i></Button>
                                                </InputGroupAddon>
                                                <Input type="text" editable="false" className="text-center font-weight-bold" value={this.state.quantity} id="input3-group2" name="input3-group2" placeholder="0" />
                                                <InputGroupAddon addonType="append">
                                                    <Button type="button" color="primary" onClick={() => this.onPlus(productIndex)}><i class="fa fa-plus fa-sm"></i></Button>
                                                </InputGroupAddon>
                                            </InputGroup>
                                    </>
                                }
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default ProductCard;
