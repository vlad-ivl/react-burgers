import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import dataFromJson from "./burgers.json";

import Burgers from "./components/Burgers/Burgers";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Order from "./components/Order/Order";
import ReadyOrders from "./components/ReadyOrders/ReadyOrders";

function App() {
  const [data, setData] = useState(dataFromJson);
  const [inputValue, setInputValue] = useState("");
  const [order, setOrder] = useState([]);
  const [active, setActive] = useState(false);
  const [id, setId] = useState();
  const [stateBurger, setStateBurger] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [allPlacedOrders, setAllPlacedOrders] = useState([]);
  console.log(data);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout order={order} />}>
            <Route
              path="/"
              element={
                <Burgers
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
                  setId={setId}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              }
            />
            <Route
              path="order"
              element={
                <Order
                  order={order}
                  setOrder={setOrder}
                  readyOrders={readyOrders}
                  setReadyOrders={setReadyOrders}
                  allPlacedOrders={allPlacedOrders}
                  setAllPlacedOrders={setAllPlacedOrders}
                />
              }
            />
            <Route
              path="ready-orders"
              element={<ReadyOrders readyOrders={readyOrders} />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
