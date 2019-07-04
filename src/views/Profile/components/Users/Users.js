import React, {useState} from 'react'
import { Row, Col, Card, CardHeader, CardBody, Table, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap'
import AddNewUser from './AddNewUser'
import ConfirmModal from 'common/ConfirmModal'
import './Users.scss'

const Users = () => {


    const [modal, openModal] = useState(false)

    const toggleModal = () => {
        openModal(!modal)
    }

    return (
        <div className="Users mt-5 mb-5">
            <AddNewUser toggleModal={toggleModal} toogle={modal} />
            <Row>
                <Col xs="12" >
                    <Card>
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            <h5 className="font-weight-normal">User Management</h5>
                            <Button size="md" className="btn-success btn-brand mr-1 mb-1 float-right" onClick={toggleModal}><i className="fa fa-plus"></i><span>Add New User</span></Button>
                        </CardHeader>
                        <CardBody>
                            <Table responsive className="table-hover ">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Permission Level</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jacob Bosses</td>
                                        <td>jbosses@sonicleanusa.com</td>
                                        <td>User</td>
                                        <td>
                                            <ConfirmModal />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>johndoes@123456.com</td>
                                        <td>admin</td>
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

export default Users
