import React, {useState} from 'react'

import { Row, Col, Card, CardHeader, CardBody, Table, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap'
import './PaymentMethods.scss'

import ae from '../../images/ae.png'
import visa from '../../images/visa.png'
import AddPaymentMethodModal from '../../../SalesForm/components/AddPaymentMethodModal'
import ConfirmModal from 'common/ConfirmModal'

const PaymentMethods = () => {

    const [modal, openModal] = useState(false)

    const toggleModal = () => {
        openModal(!modal)
    }
    
    return (
        <div className="PaymentMethods mt-5 mb-5">
            <Modal isOpen={modal} toggle={toggleModal}
                className={'modal-primary ' + 'modal-md'}>
                <ModalHeader toggle={toggleModal}>Add Payment Method</ModalHeader>
                <ModalBody>
                    <AddPaymentMethodModal />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleModal}>Submit</Button>
                    <Button color="danger" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Row>
                <Col xs="12" >
                    <Card>
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            <h5 className="font-weight-normal">Saved Credit Cards</h5>
                            <Button size="md" className="btn-success btn-brand mr-1 mb-1 float-right" onClick={toggleModal}><i className="fa fa-plus"></i><span>Add New Card</span></Button>
                        </CardHeader>
                        <CardBody>
                            <Table responsive className="table-hover ">
                                <thead>
                                    <tr>
                                        <th>Card</th>
                                        <th>Card Number</th>
                                        <th>Exp. Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src={ae} alt="ae" /></td>
                                        <td>•••• 4863</td>
                                        <td>10/20</td>
                                        <td>
                                            <ConfirmModal />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={visa} alt="visa" /></td>
                                        <td>•••• 4863</td>
                                        <td>10/20</td>
                                        <td>
                                            <ConfirmModal />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PaymentMethods
