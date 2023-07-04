import React from "react";

import "./ModalOrder.css";
import { NavLink } from "react-router-dom";

function ModalOrder({
  allPlacedOrders,
  setAllPlacedOrders,
  setOrder,
  order,
  readyOrders,
  setReadyOrders,
}) {
  function placeOrder() {
    let newOrder = JSON.parse(JSON.stringify(readyOrders));

    console.log("order", order);
    let copyOfOrder = JSON.parse(JSON.stringify(order));

    newOrder.push(copyOfOrder);
    setReadyOrders(newOrder);
    console.log("readyOrders", readyOrders);
    setOrder([]);
  }
  console.log("readyOrders", readyOrders);
  return (
    <div className="modalOrder">
      <div className="modalOrder-content">
        <div>
          <h1>CONGRATULATIONS</h1>
          <br />
          <h3>Your order has been placed</h3>
        </div>
        <div>
          <h2>Move to main page?</h2>
          <NavLink to="/ready-orders">
            <button onClick={placeOrder} className="modalOrder-btn">
              Sure
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ModalOrder;
