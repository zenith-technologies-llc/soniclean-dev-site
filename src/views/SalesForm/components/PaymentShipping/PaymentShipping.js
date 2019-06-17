import React, { Component } from 'react'
import {
  Button,
  FormGroup,
  Input,
  FormFeedback
} from 'reactstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .label('Name'),
});
class PaymentShipping extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const { type } = this.props
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="font-weight-normal text-black"> 
              {
                type===1 ? 'Store Shipping Information' : 'Customer Shipping Information'
              }
          </h3>
        </div>
        {
          type===1 &&
            <div >
              <h6 className="text-black font-weight-normal">Enter name of company owner/employee that this order will be addressed to</h6>
              <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, actions) => {
                  alert(JSON.stringify(values));
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 1000);
                }}
                validationSchema={validationSchema}
              >
                {formikProps => (
                  <FormGroup>
                    <Input type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      className="w-50 mt-2"
                      valid={!formikProps.errors.name}
                      invalid={formikProps.touched.name && !!formikProps.errors.name}
                      autoFocus={true}
                      required
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.name} />
                    <FormFeedback>{formikProps.errors.name}</FormFeedback>
                  </FormGroup>
                )}
              </Formik>
            </div>
        }
        
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div>
            <h6 className=".text-muted font-weight-normal pr-5">Company Name, Inc</h6>
            <h6 className=".text-muted font-weight-normal pr-5">Address Line 1, Inc</h6>
            <h6 className=".text-muted font-weight-normal pr-5">Address Line 2, Inc</h6>
            <h6 className=".text-muted font-weight-normal pr-5">City, State, ZipCode</h6>
          </div>
          <Button color="primary" onClick={this.props.SW} > Edit </Button>
        </div>
      </>
    )
  }
}

export default PaymentShipping