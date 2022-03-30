import React from "react";

const OrderCard = () => {
  return (
    <div
      style={{
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px grey",
        backgroundColor: "white",
        marginBottom: "7px",
        minWidth: "16vw",
        padding: "10px",
      }}
    >
      <div className="orderHead">
        <h4>Order no: 145</h4>
        <p>8:32 PM</p>
      </div>
      <p style={{ fontWeight: "bold", paddingTop: "5px" }}>1235/-</p>
    </div>
  );
};

export default OrderCard;
