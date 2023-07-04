import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { MdOutlineDeleteForever } from "react-icons/md";

import "./Order.css";
import ModalOrder from "../ModalOrder/ModalOrder";

function Order({
  allPlacedOrders,
  setAllPlacedOrders,
  order,
  setOrder,
  readyOrders,
  setReadyOrders,
}) {
  const [isOrdered, setIsOrdered] = useState(false);

  function deleteBurger(key) {
    let changedOrder = order.filter((burger) => burger.id !== key);
    setOrder(changedOrder);
  }

  function toggleOrderStatus() {
    !!isOrdered ? setIsOrdered(false) : setIsOrdered(true);
  }

  return (
    <div className="order">
      {!!isOrdered ? (
        <ModalOrder
          readyOrders={readyOrders}
          setReadyOrders={setReadyOrders}
          order={order}
          setOrder={setOrder}
          allPlacedOrders={allPlacedOrders}
          setAllPlacedOrders={setAllPlacedOrders}
        />
      ) : (
        <div className="order-content">
          <h3 className="order-title">YOUR ORDER</h3>
          {order.length > 0 ? (
            <div>
              {order.map((burger) => {
                let key = uuid();
                burger.id = key;

                return (
                  <div key={key}>
                    <div className="order-burger-name-with-trash">
                      <h3 className="order-burger-name">{burger.name}</h3>
                      <MdOutlineDeleteForever
                        onClick={() => deleteBurger(key)}
                        className="order-burger-delete-icon"
                      />
                    </div>

                    <div className="order-burger">
                      <div className="order-burger-ingredients-list">
                        {burger.ingredients.map((ingredient, index) => (
                          <h5
                            key={uuid()}
                          >{`${ingredient.name}: ${ingredient.quantity}`}</h5>
                        ))}
                      </div>
                      <img className="order-burger-img" src={burger.img}></img>
                    </div>
                  </div>
                );
              })}
              <div className="order-btn-block">
                <NavLink to="/">
                  <button className="orderBtnGroup addBurgersBtn">
                    Add more burgers
                  </button>
                </NavLink>
                <div>
                  <button
                    onClick={toggleOrderStatus}
                    className="orderBtnGroup makeOrderBtn"
                  >
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <h2>Your orderlist is empty</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default Order;
