import React, { Component } from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

const options = [
    { value: 'jbosses@sonicleanusa.com', label: 'jbosses@sonicleanusa.com' },
    { value: '1231232@12321.com', label: '1231232@12321.com' },
    { value: 'asdfsdf@dsdfa.com', label: 'asdfsdf@dsdfa.com' }
]

class EmailNotification extends Component {

    state = {
        value: null
    }

    saveChanges = (value) => {
        this.setState({ value });
    }

  render() {
    return (
      <div>
            <h6 className="text-black font-weight-normal mt-2">To CC employees on order confirmation emails, you will have to create an account for them in your <a href="#">company profile page.</a></h6>
            <div className="mt-3 mb-5">
                <Select
                    name="form-field-name2"
                    value={this.state.value}
                    options={options}
                    onChange={this.saveChanges}
                    multi
                />
            </div>
      </div>
    )
  }
}

export default EmailNotification