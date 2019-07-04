import React, { useState } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap'

const ConfirmModal = () => {

    const [modal, setModal] = useState(false)

    return (
        <>
            <Button color="danger" onClick={()=>setModal(true)}>DELETE</Button>
            <Modal isOpen={modal}
                className={'modal-primary' + 'modal-md'}>
                <ModalHeader toggle={()=>setModal(false)}>Delete</ModalHeader>
                    <ModalBody className="text-center">
                        <Row className="mb-3">
                            <Col>
                                <h5>Are you Sure?</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button color="primary m-1 w-100" >Yes</Button>
                            </Col>
                            <Col>
                                <Button color="danger m-1 w-100" onClick={()=>setModal(false)}>Cancel</Button>
                            </Col>
                        </Row>
                    </ModalBody>
            </Modal>
        </>
    )
}

export default ConfirmModal
