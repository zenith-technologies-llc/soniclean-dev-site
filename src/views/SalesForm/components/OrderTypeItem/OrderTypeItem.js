import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
import './OrderTypeItem.scss'

class OrderTypeItem extends Component {

    constructor (props) {
        super(props)
        this.state = {
            selected: false
        }
    }

    componentDidMount = () => {
        this.onCheckStatus()
    }

    onMouseOver = () => {
        this.setState({ hover: true })
    }

    onMouseOut = () => {
        this.setState({ hover: false })
    }

    onSelect = () => {
        this.props.onSelected(this.props.type, !this.state.selected)
    }

    onCheckStatus = () => {
        const {selectedIndex, type} = this.props
        if(selectedIndex===type) {
            this.setState({selected: true})
        } else {
            this.setState({selected: false})
        }
    }

    render() {

        const { info, selectedIndex, type } = this.props
        const { selected } = this.state
        return (
            <Card className={classNames("OrderTypeItem h-100 w-100 d-inline-block", { 'border-success card-accent-success': selectedIndex===type}) } onClick={this.onSelect}>
                <CardBody>
                    <h5 className={classNames("font-weight-bold mt-4 text-muted", selectedIndex === type ? 'OrderTypeItem__text': '')}>{info.title}</h5>
                    <h6 className={classNames("mt-2 p-3 text-muted", selectedIndex === type ? 'OrderTypeItem__text' : '')}>{info.description}</h6>
                    <AppSwitch className={'mx-1 OrderTypeItem__check'} checked={selectedIndex === type } disabled={true} color={'success'} onChange={()=> {return;}} label dataOn={'selected'} dataOff={'select'} />
                </CardBody>
            </Card>
        )
    }
    
  
}

OrderTypeItem.propTypes = {

}

export default OrderTypeItem
