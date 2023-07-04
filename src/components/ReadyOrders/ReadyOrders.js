import React, { useState } from "react";
import uuid from "react-uuid";

import "./ReadyOrders.css";

function ReadyOrders({ readyOrders }) {
  const [isPlacedOrder, setIsPlacedOrder] = useState(false);
  const [indexOfPlacedOrder, setIndexOfPlacedOrder] = useState();
  function placedOrderToggle() {
    !!isPlacedOrder ? setIsPlacedOrder(false) : setIsPlacedOrder(true);
  }

  //  readyOrders.map((order) => {
  //   order.map((burger) => {
  //   });
  // });
  return (
    <div className="placedOrdersSection">
      <div className="placedOrdersList-block">
        {readyOrders.length > 0
          ? readyOrders.map((order, index) => {
              return (
                <div className="placedOrdersList">
                  <button
                    className="active-order active-order-btn"
                    onClick={() => {
                      placedOrderToggle();
                      setIndexOfPlacedOrder(index);
                      // console.log("burger", readyOrders[indexOfPlacedOrder].name);
                    }}
                  >{`Order number ${index + 1}`}</button>
                </div>
              );
            })
          : true}
      </div>

      <div>
        {indexOfPlacedOrder !== undefined
          ? readyOrders[indexOfPlacedOrder].map((burger) => {
              return (
                <div className="readyOrders">
                  <div className="readyOrders-textContent">
                    <h3 className="readyOrders-burgerName">{burger.name}</h3>
                    {burger.ingredients.map((ing) => {
                      return <h6>{`${ing.name}: ${ing.quantity}`}</h6>;
                    })}
                  </div>
                  <img className="readyOrders-img" src={burger.img}></img>
                </div>
              );
            })
          : true}
      </div>
    </div>
  );
}

export default ReadyOrders;
