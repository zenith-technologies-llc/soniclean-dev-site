import React, { useState } from 'react'

import {
    Col,
    Form,
    Row,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';
import classNames from 'classnames'
import { validate, getErrorsFromValidationError } from '_helpers/helper'
import { Formik } from 'formik';
import * as Yup from 'yup'

import './AddNewUser.scss'

const validationSchema = function (values) {
    return Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        firstName: Yup.string()
            .min(2, `First name has to be at least 2 characters`)
            .required('First name is required'),
        lastName: Yup.string()
            .min(1, `Last name has to be at least 1 character`)
            .required('Last name is required'),

    })
}

const initialValues = {
    email: '',
    firstName: '',
    lastName: ''
}


const AddNewUser = ({ toogle, toggleModal }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const onSubmit = (values, { setSubmitting, setErrors }) => {
        setFirstName(values.firstName)
        setLastName(values.lastName)
        setEmail(values.email)
        setTimeout(() => {
            setSubmitSuccess(true)
            setSubmitting(false)
        }, 5000)
    }

    return (
        <div className="animated fadeIn mt-3 ReferralModal">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validate={validate(validationSchema)}
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
                            <Modal isOpen={toogle}
                                className={'modal-primary ReferralModal ' + 'modal-md'}>
                                <Form onSubmit={handleSubmit} noValidate name='referralForm'>
                                    <ModalHeader toggle={toggleModal}>Add New User</ModalHeader>
                                    <ModalBody>
                                        {
                                            !submitSuccess && !isSubmitting ?
                                                <Row>
                                                    <Col>
                                                        <Row className="mt-3">
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label for="firstName">First Name</Label>
                                                                    <div>
                                                                        <Input type="firstName"
                                                                            name="firstName"
                                                                            id="firstName"
                                                                            autoComplete="firstName"
                                                                            valid={!errors.firstName}
                                                                            invalid={touched.firstName && !!errors.firstName}
                                                                            required
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.firstName} />
                                                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                                                    </div>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label for="lastName">Last Name</Label>
                                                                    <div>
                                                                        <Input type="lastName"
                                                                            name="lastName"
                                                                            id="lastName"
                                                                            autoComplete="lastName"
                                                                            valid={!errors.lastName}
                                                                            invalid={touched.lastName && !!errors.lastName}
                                                                            required
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.lastName} />
                                                                        <FormFeedback>{errors.lastName}</FormFeedback>
                                                                    </div>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={12} className="mt-2">
                                                                <FormGroup>
                                                                    <Label for="email">Email Address</Label>
                                                                    <div>
                                                                        <Input type="email"
                                                                            name="email"
                                                                            id="email"
                                                                            autoComplete="email"
                                                                            valid={!errors.email}
                                                                            invalid={touched.email && !!errors.email}
                                                                            required
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.email} />
                                                                        <FormFeedback>{errors.email}</FormFeedback>
                                                                    </div>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row> : !submitSuccess && isSubmitting ?
                                                    <Row>
                                                        <Col className="text-center">
                                                            <h4 className="text-muted font-wegith-bold">Please wait...</h4>
                                                            <h6 className="text-muted font-weight-bold">(Do not close or refresh this page)</h6>
                                                            <h6 className="text-muted font-weight-bold mt-3">{firstName} {lastName}</h6>
                                                            <h6 className="text-muted font-weight-bold">{email}</h6>
                                                            <div class="circle-loader mt-3">
                                                                <div class="checkmark draw"></div>
                                                            </div>
                                                        </Col>
                                                    </Row> : submitSuccess && !isSubmitting ?
                                                        <Row>
                                                            <Col className="text-center">
                                                                <h4 className="text-muted font-wegith-bold">Invitation Link Sent Successfully!</h4>
                                                                <h6 className="text-muted font-weight-bold mt-3">{firstName} {lastName}</h6>
                                                                <h6 className="text-muted font-weight-bold">{email}</h6>
                                                                <div class="circle-loader load-complete mt-3">
                                                                    <div class="checkmark draw " style={{ display: 'block' }}></div>
                                                                </div>
                                                            </Col>
                                                        </Row> : null
                                        }
                                    </ModalBody>
                                    <ModalFooter>
                                        {
                                            !submitSuccess && !isSubmitting ?
                                                <>
                                                    <Button color="primary" type="submit" disabled={!isValid}>Send Email Invitation Link</Button>
                                                    <Button color="danger" onClick={toggleModal}>Cancel</Button>
                                                </> : !submitSuccess && isSubmitting ?
                                                    <>
                                                        <Button color="primary" type="submit" disabled={isSubmitting || !isValid}>{'Wait...'}</Button>
                                                    </> : submitSuccess && !isSubmitting ?
                                                        <>
                                                            <Button color="danger" onClick={() => { toggleModal(); handleReset() }}>Done</Button>
                                                        </> : null

                                        }

                                    </ModalFooter>
                                </Form>
                            </Modal>

                        )} />

        </div>
    )
}

export default AddNewUser
