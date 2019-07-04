import React from 'react'
import PropTypes from 'prop-types'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap'
import './RegisterSubmitModal.scss'

const RegisterSubmitModal = ({ modal, toggleModal, submitSuccess}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggleModal}
                className={'modal-primary ' + 'modal-md'}>
                <ModalHeader toggle={toggleModal}>Add Store Location</ModalHeader>
                <ModalBody>
                    {
                        !submitSuccess ? 
                            <Row>
                                <Col className="text-center RegisterSubmitModal">
                                    <h4 className="text-muted font-wegith-bold">Please wait...</h4>
                                    <h6 className="text-muted font-weight-bold">(Do not close or refresh this page)</h6>
                                    <div className="circle-loader mt-3">
                                        <div className="checkmark draw"></div>
                                    </div>
                                </Col>
                            </Row> :
                            <Row>
                                <Col className="text-center RegisterSubmitModal">
                                    <h5 className="text-muted font-wegith-bold">Your registration form has been successfully submitted. Please allow up to 24 to 48 hours for your account to be activated. When your account has been activated, you will receive an email containing login instructions for your Soniclean dealer account.</h5>
                                    <div class="circle-loader load-complete mt-3">
                                        <div class="checkmark draw " style={{ display: 'block' }}></div>
                                    </div>    
                                </Col>
                            </Row>
                    }
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggleModal}>Done</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

RegisterSubmitModal.propTypes = {

}

export default RegisterSubmitModal
