import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classNames from 'classnames'
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
  FormGroup,
  Label,
  FormFeedback
} from 'reactstrap';

import { Formik, Field } from 'formik';
import MaskedInput from "react-text-mask";
import 'react-select/dist/react-select.min.css';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';
import * as Yup from 'yup'
import './Register.scss'
import logo from './images/logo.png'

import { stateActions, brandActions } from "../../../_actions";
import axios from 'axios';

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];


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
    phonenumber: Yup.string()
      .required('Store phone number is required'),
    companyName: Yup.string()
      .required('Company name is required'),
    website: Yup.string()
      .min(2, `Website URL has to be at least 2 characters`)
      .required('Website URL is required'),
    mohawkAccount: Yup.string()
      .min(6, `Mohawk Account has to be at least 2 characters`)
      .required('Mohawk Account is required'),
    Address: Yup.string()
      .min(5, `Address has to be at least 5 characters`)
      .required('Address is required'),
    Address2: Yup.string()
      .min(5, `Address2 has to be at least 5 characters`),
    city: Yup.string()
      .min(5, `City has to be at least 5 characters`)
      .required('City is required'),
    zipCode: Yup.string()
      .length(5, `Zip Code has to be at 5 characters`)
      .required('Zip Code is required'),
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
  email: '',
  firstName: '',
  lastName: '',
  phonenumber: '',
  website: '',
  companyname: '',
  mohawkAccount: '',
  Address: '',
  city: '',
  zipCode: '',
  us_state: '',
  mohawkBrands: '',
  us_state: ''
}


class Register extends Component {

  states_ = {};

  constructor(props) {
    super(props)
    this.props.fetchStateData();
    this.props.fetchBrandsData();

    this.touchAll = this.touchAll.bind(this)
    this.state = {
      submitSuccess: false,
      email: '',
      firstName: '',
      lastname: '',
      us_state: '',
      mohawkBrands: [],
      us_state_error: false,
      mohawk_error: false
    }
    this.form = React.createRef();
    this.saveMohawkChanges = this.saveMohawkChanges.bind(this);
  }

  componentDidMount = () => {
    this.form.current.validateForm();
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
  /*  this.setState({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    });
*/
    const appBaseURL = process.env.REACT_APP_API_URL;
     axios.post(appBaseURL + 'dealers', { 
            ownerfirstname: values.firstName,
            ownerlastname: values.lastName,
            companyname: values.companyname,
            mohawkaccountid: values.mohawkAccount,
            email: values.email,
            website: values.website,
            companyphone: values.phonenumber,
            storeaddress: values.Address,
            storeaddress2: values.Address2,
            storecity: values.city,
            storestate: values.us_state,
            storezip: values.zipcode,
            brands: values.mohawkBrands
       })
          .then((result) => {
            this.setState({ submitSuccess: true });
            setSubmitting(false);
            //access the results here....
          });
    /*
    setTimeout(() => {
      this.setState({ submitSuccess: true })
      setSubmitting(false)
    }, 5000)*/
  }

  saveChanges = (value) => {
    this.setState({ us_state: value, us_state_error: false });
  }

  handleBlur = () => {
    if (this.state.us_state === null) {
      this.setState({ us_state_error: true })
    } else {
      if (this.state.us_state.length > 0 || this.state.us_state.length === undefined) {
        this.setState({ us_state_error: false })
      } else {
        this.setState({ us_state_error: true })
      }
    }

  }
/*
  saveMohawkChanges = (value) => {
    this.setState({ mohawkBrands: value, mohawk_error: false });
  }
*/
  saveMohawkChanges = (value) => {
    this.setState(state => {
      return {
        mohawkBrands: value
      };
    });
  }

  handleMohawkBlur = () => {
    if (this.state.mohawkBrands === null) {
      this.setState({ mohawk_error: true })
    } else {
      if (this.state.mohawkBrands.length > 0 || this.state.mohawkBrands.length === undefined) {
        this.setState({ mohawk_error: false })
      } else {
        this.setState({ mohawk_error: true })
      }
    }

  }

  render() {
    const { stateData, brandData } = this.props;

    return (
      <div className="app flex-row align-items-center Register">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="7" xl="12">
              <Card className="mt-5">
                <CardBody className="p-4">
                  <div className="text-center"><img src={logo} alt="logo" /></div>
                  <h6 className="mt-3 text-center text-muted font-weight-normal">
                    To become a Soniclean dealer, you will need to register your company first using the form below. Please note that this program is only available for authorized Mohawk retailers. Once you've submitted this registration form, please allow up to 24 to 48 hours for your account to be approved. When your account is approved and activated, you will receive a welcome email with your Soniclean account login instructions.
                  </h6>
                  <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validate={validate(validationSchema)}
                    onSubmit={this.onSubmit}
                    ref={this.form}
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
                          <Form onSubmit={handleSubmit} noValidate name='referralForm'>
                            <Row>
                              <Col>
                                <Row className="mt-3">
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="firstName" className="text-muted">First Name</Label>
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
                                      <Label for="lastName" className="text-muted">Last Name</Label>
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
                                  <Col md={6} >
                                    <FormGroup>
                                      <Label for="email" className="text-muted">Email Address</Label>
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
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="phonenumber" className="text-muted">Phone Number</Label>
                                      <Field
                                        name="phonenumber"
                                        render={({ field }) => (
                                          <MaskedInput
                                            {...field}
                                            mask={phoneNumberMask}
                                            id="phonenumber"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                            className={
                                              errors.phonenumber && touched.phonenumber
                                                ? "is-invalid form-control"
                                                : "form-control"
                                            }
                                          />
                                        )}
                                      />
                                      <FormFeedback>{errors.phonenumber}</FormFeedback>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="companyName" className="text-muted">Company Name</Label>
                                      <div>
                                        <Input type="companyName"
                                          name="companyName"
                                          id="companyName"
                                          autoComplete="companyName"
                                          valid={!errors.companyName}
                                          invalid={touched.companyName && !!errors.companyName}
                                          required
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.companyName} />
                                        <FormFeedback>{errors.companyName}</FormFeedback>
                                      </div>
                                    </FormGroup>
                                  </Col>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="website" className="text-muted">Website URL</Label>
                                      <div>
                                        <Input type="website"
                                          name="website"
                                          id="website"
                                          autoComplete="website"
                                          valid={!errors.website}
                                          invalid={touched.website && !!errors.website}
                                          required
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.website} />
                                        <FormFeedback>{errors.website}</FormFeedback>
                                      </div>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="mohawkAccount" className="text-muted">Mohawk Account #</Label>
                                      <div>
                                        <Input type="number"
                                          name="mohawkAccount"
                                          id="mohawkAccount"
                                          autoComplete="mohawkAccount"
                                          valid={!errors.mohawkAccount}
                                          invalid={touched.mohawkAccount && !!errors.mohawkAccount}
                                          required
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.mohawkAccount} />
                                        <FormFeedback>{errors.mohawkAccount}</FormFeedback>
                                      </div>
                                    </FormGroup>
                                  </Col>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="mohawkBrands">Which products Mohawk brands do you sell?</Label>
                                      <Field
                                        name="mohawkBrands"
                                        render={({ field }) => (
                                          <Select
                                            {...field}
                                            name="mohawkBrands"
                                            id="mohawkBrands"
                                            value={this.state.mohawkBrands}
                                            options={brandData}
                                            isMulti={true}
                                            valid={!errors.mohawkBrands}
                                            invalid={touched.mohawkBrands && !!errors.mohawkBrands}
                                            onChange={this.saveMohawkChanges}
                                            onBlur={() => this.handleMohawkBlur()}
                                            className={classNames(this.state.mohawk_error ? 'error-select' : '')}
                                          />
                                        )}
                                      />
                                      {this.state.mohawk_error ? <div className="error">Mohawk brands is required</div> : ''}
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row className="mt-3">
                                  <Col md={12}>
                                    <h4 className="text-center">Shipping Address (Main Store Location)</h4>
                                  </Col>
                                </Row>
                                <Row className="mt-1">
                                  <Col md={12}>
                                    <h6 className="text-center text-muted font-weight-normal">You can add additional store locations once your account has been activated</h6>
                                  </Col>
                                </Row>

                                <FormGroup>
                                
                                  <Label for="Address">Address 1</Label>
                                  <Input type="text"
                                    name="Address"
                                    id="Address"
                                    placeholder="e.g. 123 Main St."
                                    autoComplete="address"
                                    valid={!errors.Address}
                                    invalid={touched.Address && !!errors.Address}
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Address} />
                                  <FormFeedback>{errors.Address}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                  <Label for="Address">Address 2</Label>
                                  <Input type="text"
                                    name="Address2"
                                    id="Address2"
                                    autoComplete="address2"
                                    placeholder="e.g. Unit, Ste, Apt...."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Address2} />
                                </FormGroup>

                                <Row>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label for="email">City</Label>
                                      <Input type="city"
                                        name="city"
                                        id="city"
                                        autoComplete="city"
                                        valid={!errors.city}
                                        invalid={touched.city && !!errors.city}
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city} />
                                      <FormFeedback>{errors.city}</FormFeedback>
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="confirmPassword">State</Label>
                                      <Field
                                        name="us_state"
                                        render={({ field }) => (
                                          <Select
                                            {...field}
                                            name="us_state"
                                            id="us_state"
                                            value={this.state.us_state}
                                            options={stateData}
                                            valid={!errors.us_state}
                                            invalid={touched.us_state && !!errors.us_state}
                                            onChange={this.saveChanges}
                                            onBlur={() => this.handleBlur()}
                                            className={classNames(this.state.us_state_error ? 'error-select' : '')}
                                          />)}
                                      />
                                      {this.state.us_state_error ? <div className="error">State is required</div> : ''}
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    <FormGroup>
                                      <Label for="zipCode">Zip Code</Label>
                                      <Input type="number"
                                        name="zipCode"
                                        id="zipCode"
                                        autoComplete="zipCode"
                                        valid={!errors.zipCode}
                                        invalid={touched.zipCode && !!errors.zipCode}
                                        required
                                        maxLength="200"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.zipCode} />
                                      <FormFeedback>{errors.zipCode}</FormFeedback>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={12} className="mt-3">
                                    <Button type="submit" color="success" className="mr-1 btn-block" disabled={isSubmitting || !isValid}>{isSubmitting ? 'Wait...' : 'Submit'}</Button>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>

                          </Form>
                        )} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//export default Register;


const mapStateToProps = ({ states, brands }) => {
  const { stateData } = states;
  const { brandData } = brands;
  return { stateData, brandData };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateData: () => {
      dispatch(stateActions.fetchStates());
    },
    fetchBrandsData: () => {
      dispatch(brandActions.fetchBrands());
    },
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Register));