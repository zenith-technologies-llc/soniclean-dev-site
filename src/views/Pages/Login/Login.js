import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  FormFeedback,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

import LaddaButton, {
  EXPAND_RIGHT,
  L
} from 'react-ladda';

import { Formik } from "formik";
import * as Yup from "yup";

// import { userActions } from "../../../_actions";
import { fetchLogin } from 'modules/Auth'

import "ladda/dist/ladda-themeless.min.css";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = function (values) {
  return Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      // .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
      .required('Password is required'),
  })
}

const validate = getValidationSchema => {
  return values => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = validationError => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR]
    };
  }, {});
};

const initialValues = {
  email: "",
  password: "",
};

class Login extends Component {

  onSubmit = (values, { setSubmitting, setErrors }) => {

    this.props.userLogin(values.email, values.password);

  };

  componentWillReceiveProps = (nextProps, prevState) => {
    if (nextProps.errorLogin === true) {
      return toast.error("Invalid credentials!");
    }
  }

  render() {
    const containerStyle = {
      zIndex: 1999
    };
    return (
      <div className="app flex-row align-items-center">
        <ToastContainer position="top-right" autoClose={3000} style={containerStyle} />
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Formik
                      initialValues={initialValues}
                      validate={validate(validationSchema)}
                      onSubmit={this.onSubmit}
                      render={({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        isValid
                      }) => (
                          <Form
                            onSubmit={handleSubmit}
                            noValidate
                            name="LoginForm"
                          >
                            <h1>Login</h1>
                            <p className="text-muted">
                              Sign In to yourr account
                          </p>
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                placeholder="Email"
                                autoComplete="email"
                                name="email"
                                value={values.email}
                                valid={!errors.email}
                                invalid={touched.email && !!errors.email}
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <FormFeedback>{errors.email}</FormFeedback>
                            </InputGroup>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-lock" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                value={values.password}
                                name="password"
                                valid={!errors.password}
                                invalid={
                                  touched.password && !!errors.password
                                }
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <FormFeedback>{errors.password}</FormFeedback>
                            </InputGroup>
                            <Row>
                              <Col xs="6">
                                <LaddaButton
                                  type="submit"
                                  className="btn btn-primary btn-ladda"
                                  loading={this.props.loggingIn}
                                  data-color="primary"
                                  data-size={L}
                                  data-style={EXPAND_RIGHT}
                                  disabled={this.props.loggingIn || !isValid}
                                >
                                  Login
                              </LaddaButton>
                              </Col>
                              <Col xs="6" className="text-right">
                                <Button
                                  type="button"
                                  color="link"
                                  className="px-0"
                                >
                                  Forgot password?
                              </Button>
                              </Col>
                            </Row>
                          </Form>
                        )}
                    />
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  console.log("mapStateToProps")
  const { loggingIn, errorLogin } = auth;
  return { loggingIn, errorLogin };
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (email, password) => {
      dispatch(fetchLogin(email, password));
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Login));
