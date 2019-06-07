import React, { Component } from 'react'
import { 
    Button, 
    Card, 
    CardHeader, 
    CardBody, 
    Col, 
    CustomInput, 
    Form, 
    FormFeedback, 
    FormGroup, 
    Label, 
    Input, 
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
 } from 'reactstrap';
import { Formik } from 'formik';
import AddLocationModal from '../AddLocationModal'

import './LocationForm.scss'
const initialValues = {
    location0: false,
    location1: false,
    location2: false
}

const onSubmit = (values, { setSubmitting, setErrors }) => {

    setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 2000)
}



class LocationForm extends Component {

    constructor(props) {
        super(props)
        this.state ={
            modal: false
        }
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }


  render() {

    const { modal } = this.state

    return (
        <div className="animated fadeIn LocationForm mt-3">
            <Modal isOpen={modal} toggle={this.toggleModal}
                className={'modal-primary ' + 'modal-lg'}>
                <ModalHeader toggle={this.toggleModal}>Add Store Location</ModalHeader>
                <ModalBody>
                    <AddLocationModal />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>Submit</Button>
                    <Button color="danger" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Card>
                <CardHeader className="text-left">
                    <i className="icon-note"></i><strong>Select Store Location</strong>
                </CardHeader>
                <CardBody className="text-left">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        render={
                            ({
                                values,
                                errors,
                                touched,
                                status,
                                dirty,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                isValid,
                                handleReset,
                                setTouched
                            }) => (
                                    <Row>
                                        <Col>
                                            <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                                                
                                                <FormGroup className="mt-3">
                                                    <CustomInput
                                                        type="checkbox"
                                                        id="location0"
                                                        label="Carpet ABC, Inc. 1234 Test Road Boca Raton, FL 33308"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} >
                                                    </CustomInput>
                                                </FormGroup>
                                                <FormGroup>
                                                    <CustomInput
                                                        type="checkbox"
                                                        id="location1"
                                                        label="Carpet ABC, Inc. 4562 street Delray Beach, FL 33308"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} >
                                                    </CustomInput>
                                                </FormGroup>
                                                <FormGroup>
                                                    <CustomInput
                                                        type="checkbox"
                                                        id="location2"
                                                        label="Carpet ABC, Inc. 9998 West Federal Hwy Fort Lauderdale, FL 33432"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} >
                                                    </CustomInput>
                                                </FormGroup>

                                                <FormGroup className="mt-5 text-center">
                                                    <Button type="button" color="danger" className="mr-1" onClick={this.toggleModal}>Add Store Location</Button>
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                    </Row>
                                )} />
                </CardBody>
            </Card>
        </div>
    )
  }
}

export default LocationForm