import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Modal.css";

function Modal({
  data,
  setData,
  dataFromJson,
  id,
  active,
  setActive,
  setOrder,
  order,
  stateBurger,
}) {
  const [renewState, setRenewState] = useState("modal-strings");

  function closeModal() {
    setActive(false);
    setData(dataFromJson);
  }

  function makeOrder() {
    let a = JSON.parse(JSON.stringify(order));
    console.log("stateBurger.ingredients", stateBurger.ingredients[0]);
    let b = JSON.parse(JSON.stringify(stateBurger));
    a.push(b);
    console.log("a", a);
    setOrder(a);
    setActive(false);
    setData(dataFromJson);
  }

  const burgerInfo = data.burgers.filter((burger) => burger.id == id);

  function incIngredients(index) {
    stateBurger.ingredients[index].quantity < 5
      ? (stateBurger.ingredients[index].quantity += 1)
      : (stateBurger.ingredients[index].quantity = 5);

    renewState === "modal-strings"
      ? setRenewState("modal-strings-renew")
      : setRenewState("modal-strings");
  }
  function decIngredients(index) {
    stateBurger.ingredients[index].quantity > 0
      ? (stateBurger.ingredients[index].quantity -= 1)
      : (stateBurger.ingredients[index].quantity = 0);

    renewState === "modal-strings"
      ? setRenewState("modal-strings-renew")
      : setRenewState("modal-strings");
  }

  return (
    <>
      {!!active ? (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-content-wrapper">
              <div>
                <h2>{burgerInfo[0].name}</h2>
                <br />
                {!!burgerInfo[0].ingredients
                  ? burgerInfo[0].ingredients.map((ing, index) => {
                      return (
                        <div className={renewState} key={index}>
                          <div>{`${ing.name}: `}</div>
                          <div>
                            {`${stateBurger.ingredients[index].quantity}`}

                            <button
                              onClick={() => incIngredients(index)}
                              className="qtyBtn"
                            >
                              +
                            </button>

                            <button
                              onClick={() => decIngredients(index)}
                              className="qtyBtn"
                            >
                              -
                            </button>
                          </div>
                        </div>
                      );
                    })
                  : true}
              </div>
              <button onClick={closeModal} className="crossBtn">
                <RxCross1 />
              </button>
            </div>
            <button onClick={makeOrder} className="orderBtn">
              Order
            </button>
          </div>
        </div>
      ) : (
        true
      )}
    </>
  );
}

export default Modal;
