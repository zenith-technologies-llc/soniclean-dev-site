import React, { Component } from 'react'

import { Button } from 'reactstrap'

class ProductInfo extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center">
            <h6 className="font-weight-bold text-muted">Subtotal</h6>
            <h6 className="text-primary">$450.00</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
            <h6 className="font-weight-bold text-muted">Shipping</h6>
            <h6 className="text-primary">$00.00</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
            <h6 className="font-weight-bold text-muted">Tax</h6>
            <h6 className="text-primary">$00.00</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
            <h6 className="font-weight-bold text-muted">Total</h6>
            <h6 className="text-primary">$450.00</h6>
        </div>
        <Button className="mt-4 font-weight-bold" color="danger" size="lg">Submit Order</Button>
        <div>
                <h6 className="text-muted mt-4">By submitting this order, you agree to the <a href="#">terms & conditions</a> of Soniclean’s MAP policy.</h6>
        </div>
      </div>
    )
  }
}

export default ProductInfo
