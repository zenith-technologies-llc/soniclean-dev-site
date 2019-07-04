import React, {useState} from 'react'
import { Row, Col, Card, CardHeader, CardBody, Table, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap'
import ConfirmModal from 'common/ConfirmModal'
import AddLocationModal from 'common/AddLocationModal'
import EditLocationModal from 'common/EditLocationModal'
import './StoreLocations.scss'

const StoreLocations = () => {

    const [locationModal, openAddLocationModal] = useState(false)

    const toggleNewModal = () => {
        openAddLocationModal(!locationModal)
    }

    return (
        <div className="StoreLocations mt-5 mb-5">
            <AddLocationModal locationModal={locationModal} openAddLocationModal={toggleNewModal}/>
            <Row>
                <Col xs="12" >
                    <Card>
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            <h5 className="font-weight-normal">Store Locations</h5>
                            <Button size="md" className="btn-success btn-brand mr-1 mb-1 float-right" onClick={toggleNewModal}><i className="fa fa-plus"></i><span>Add New Store Location</span></Button>
                        </CardHeader>
                        <CardBody>
                            <Table responsive className="table-hover ">
                                <thead>
                                    <tr>
                                        <th>Store Name</th>
                                        <th>Address</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Carpet ABC(Fort Lauderdale)</td>
                                        <td>123 Main Street, STE 4 Fort Lauderdale, FL 33432</td>
                                        <td><EditLocationModal /></td>
                                        <td>
                                            <ConfirmModal />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Carpet ABC(Boca Raton)</td>
                                        <td>123 Main Street, Boca Raton, FL 33333</td>
                                        <td><EditLocationModal /></td>
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

export default StoreLocations