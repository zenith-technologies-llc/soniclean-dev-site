import React, { Component} from 'react'
import PropTypes from 'prop-types'

import StepWizard from 'react-step-wizard';
import OrderType from './components/OrderType'
import SelectProduct from './components/SelectProduct'
import ShippingInformation from './components/ShippingInformation'
import Payment from './components/Payment'
import Nav from './components/Nav'
import transitions from './transitions.css';
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

import './SalesForm.scss'

class SalesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {},
            activeStep: 1,
            // transitions: {
            //     enterRight: `${transitions.animated} ${transitions.enterRight}`,
            //     enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
            //     exitRight: `${transitions.animated} ${transitions.exitRight}`,
            //     exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
            //     intro: `${transitions.animated} ${transitions.intro}`,
            // },
            // demo: true, // uncomment to see more
        };
    }

    onStepChange = (stats) => {
        this.setState({ activeStep: stats.activeStep})
    }

    setInstance = SW => this.setState({ SW })

    render() {
        return (
            <div className="SalesForm animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-between">
                                <Nav activeStep={this.state.activeStep} />
                            </CardHeader>
                            <CardBody>
                                <StepWizard
                                    instance={this.setInstance}
                                    onStepChange={this.onStepChange}
                                    isHashEnabled
                                >
                                    
                                        <OrderType hashKey={'ordertype'} {...this.props} />
                                        <SelectProduct hashKey={'selectproduct'} />
                                        <ShippingInformation hashKey={'shippinginformation'} />
                                        <Payment hashKey={'payment'} />
                                </StepWizard>

                            </CardBody>
                            <CardFooter>
                                Question? Give us a call at (954) 228-9100
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
  
}

SalesForm.propTypes = {

}

export default SalesForm
