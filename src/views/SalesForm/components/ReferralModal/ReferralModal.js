import React, { Component } from 'react'
import { 
    Card, 
    CardBody, 
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
import { Formik } from 'formik';
import 'react-select/dist/react-select.min.css';
import * as Yup from 'yup'

import './ReferralModal.scss'

const validationSchema = function (values) {
    return Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        
    })
}

const validate = (getValidationSchema) => {
    return (values) => {
        const validationSchema = getValidationSchema(values)
        try {
            validationSchema.validateSync(values, { abortEarly: false })
            return {}
        } catch (error) {
            return getErrorsFromValidationError(error)
        }
    }
}

const getErrorsFromValidationError = (validationError) => {
    const FIRST_ERROR = 0
    return validationError.inner.reduce((errors, error) => {
        return {
            ...errors,
            [error.path]: error.errors[FIRST_ERROR],
        }
    }, {})
}

const initialValues = {
    email: ''
}



class ReferralModal extends Component {

    constructor(props) {
        super(props)
        this.touchAll = this.touchAll.bind(this)
        this.state = {
            submitSuccess: false
        }
    }

    findFirstError(formName, hasError) {
        const form = document.forms[formName]
        for (let i = 0; i < form.length; i++) {
            if (hasError(form[i].name)) {
                form[i].focus()
                break
            }
        }
    }

    validateForm(errors) {
        this.findFirstError('referralForm', (fieldName) => {
            return Boolean(errors[fieldName])
        })
    }

    touchAll(setTouched, errors) {
        setTouched({
            email: true
        })
        this.validateForm(errors)
    }

    onSubmit = (values, { setSubmitting, setErrors }) => {
        setTimeout(() => {
            this.setState({ submitSuccess: true})
            setSubmitting(false)
        }, 2000)
    }

    render() {
        return (
            <div className="animated fadeIn mt-3 ReferralModal">
                <Formik
                    initialValues={initialValues}
                    validate={validate(validationSchema)}
                    onSubmit={this.onSubmit}
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

                                <Modal isOpen={this.props.toogle}
                                    className={'modal-primary ReferralModal ' + 'modal-md'}>
                                    <Form onSubmit={handleSubmit} noValidate name='referralForm'>
                                        <ModalHeader toggle={this.toggleModal}>Send Customer Referral Link</ModalHeader>
                                        <ModalBody>
                                            {
                                                !this.state.submitSuccess && !isSubmitting ?
                                                <Row>
                                                    <Col>

                                                        <Row>
                                                            <Col>
                                                                <h6 className="font-weight-normal">
                                                                    Soniclean will email your customer a link to where they can purchase a Soniclean Soft Carpet vacuum for 15% off the retail MAP price. If your customer completes their purchase, your account will be credited 1 Soniclean referral point. Earn 6 Soniclean referral points redeem them for a free Soniclean Soft Carpet vacuum cleaner.
                                                                </h6>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={12} className="mt-3">
                                                                <FormGroup>
                                                                    <Label for="email">Enter Customer Email Address</Label>
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
                                                    </Row> : !this.state.submitSuccess && isSubmitting ?
                                                <Row>
                                                    <Col className="text-center">
                                                        <h4 className="text-muted font-wegith-bold">Please wait...</h4>
                                                        <h6 className="text-muted font-weight-bold">(Do not close or refresh this page)</h6>
                                                        <div class="circle-loader mt-5">
                                                            <div class="checkmark draw"></div>
                                                        </div>                                                    
                                                    </Col>
                                                </Row> : this.state.submitSuccess && !isSubmitting ?
                                                <Row>
                                                    <Col className="text-center">
                                                        <h4 className="text-muted font-wegith-bold">Referral Link Sent Successfully!</h4>
                                                        <div class="circle-loader load-complete mt-5">
                                                            <div class="checkmark draw " style={{display: 'block'}}></div>
                                                        </div>    
                                                    </Col>
                                                </Row> : null
                                            }
                                            
                                        </ModalBody>
                                        <ModalFooter>
                                            {
                                                !this.state.submitSuccess && !isSubmitting ? 
                                                <>
                                                    <Button color="primary" type="submit" disabled={!isValid}>{'Submit'}</Button>
                                                    <Button color="danger" onClick={this.props.closeModal}>Cancel</Button>
                                                </> : !this.state.submitSuccess && isSubmitting ?
                                                <>
                                                    <Button color="primary" type="submit" disabled={isSubmitting || !isValid}>{'Wait...'}</Button>
                                                </> : this.state.submitSuccess && !isSubmitting ?
                                                <>
                                                    <Button color="danger" onClick={this.props.closeModal}>Done</Button>
                                                </> : null
                                        
                                            }
                                            
                                        </ModalFooter>
                                    </Form>
                                </Modal>

                            )} />

            </div>
        )
    }
}

export default ReferralModal