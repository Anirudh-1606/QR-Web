import React from "react";
import OrderCard from "./orderCard";
import "./taskTab.css";
import OrderItem from "./orderItem";

const TaskTab = () => {
  return (
    <div className="taskTabCon">
      <div className="orderList">
        <h3 style={{ marginLeft: "5px", marginTop: "15px" }}>Order List</h3>
        <div className="orderCard">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
      <div className="orderDetails" style={{ padding: "20px", width: "100%" }}>
        <h2 style={{ marginLeft: "8px" }}>Order Items</h2>
        <div className="sumCon" style={{ marginTop: "15px" }}>
          <div className="nameCon">
            <p>Name</p>
            <h5>Ranveer Badder</h5>
          </div>
          <div className="tableNo">
            <p>Table no</p>
            <h5>6</h5>
          </div>
          <div className="time">
            <p>Time</p>
            <h5>8:36:21 PM</h5>
          </div>
          <div className="contact">
            <p>Contact Number</p>
            <h5>8106666821</h5>
          </div>
        </div>
        <div className="orderItems">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default TaskTab;
