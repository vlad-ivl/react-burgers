import React from "react";
import Burger from "../Burger/Burger";
import Modal from "../Modal/Modal";

import "./Burgers.css";

function Burgers({
  data,
  setData,
  dataFromJson,
  setActive,
  setId,
  setStateBurger,
  stateBurger,
  active,
  id,
  setOrder,
  order,
  setInputValue,
  inputValue,
}) {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function searchFunction(value) {
    let newData = dataFromJson.burgers.filter((burger) => {
      return burger.name
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());
    });
    let newObj = { burgers: [] };
    newObj.burgers = newData;
    setData(newObj);
  }
  console.log(inputValue);
  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <label>Search</label>
        <input
          className="form-input"
          type="text"
          placeholder="Find your burger"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);

            searchFunction(inputValue);
          }}
        />
      </form>
      <Modal
        stateBurger={stateBurger}
        setStateBurger={setStateBurger}
        order={order}
        setOrder={setOrder}
        data={data}
        setData={setData}
        dataFromJson={dataFromJson}
        id={id}
        active={active}
        setActive={setActive}
      />

      {!!data
        ? data.burgers.map((burger) => {
            return (
              <div
                className="burgers-block"
                key={burger.id}
                onClick={() => {
                  setId(burger.id);
                  setActive(true);
                  setStateBurger(burger);
                }}
              >
                <Burger img={burger.img} name={burger.name} />
              </div>
            );
          })
        : true}
    </>
  );
}

export default Burgers;
