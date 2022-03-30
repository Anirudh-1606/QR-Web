import React from "react";
import "./orderItem.css";

const OrderItem = () => {
  return (
    <div className="orderItemCon">
      <div className="no">
        <p>Order No</p>
        <h4>#1246</h4>
      </div>

      <div className="item">
        <p>Item</p>
        <h4>Ice Cream</h4>
      </div>
      <div className="qty">
        <p>quantity</p>
        <h4>x3</h4>
      </div>
      <div className="total">
        <p>total</p>
        <h4>125/-</h4>
      </div>
    </div>
  );
};

export default OrderItem;
