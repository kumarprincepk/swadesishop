import React from "react";
import '../style/EditOrder.css';

export default function EditOrder2() {
  return (
    <div>
      <div className="card col-md-4">
        <div className="card-body">
          <h4>ORDER SUMMARY</h4>
          <div className="hed">
          <p className="left">Subtotal</p>
          <p className="right">&#8377; 4,040</p>
          </div>
          <div className="hed">
          <p className="left">Shipping</p>
          <p className="right">&#8377; 50</p>
          </div>
          <div className="hr" ></div>
          <div className="hed li">
          <p className="left">SHIPPING</p>
          <p className="right">&#8377; 4,090</p>
          </div>
          <div className="d-grid btnmai">
            <button className="btn btn-outline-dark fame" type="button">
             place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
