import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { RiTakeawayLine } from "react-icons/ri";

import "./Header.css";
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";

function Header({ order }) {
  const [BasketEmpty, setBasketEmpty] = useState("btn-icon");
  // function emptyBasket() {
  //   order.length === 0
  //     ? setBasketEmpty("btn-icon header-empty")
  //     : setBasketEmpty("btn-icon basket");
  // }

  return (
    <div className="header-section">
      <div className="container">
        <div className="header">
          <Button>
            <NavLink className="link" to="/" end>
              <AiOutlineHome className="icon" />
            </NavLink>
          </Button>

          <Button classN={BasketEmpty}>
            <>
              {order.length == 0 ? (
                <NavLink className="link" to="/order">
                  <SlBasket className="icon" />
                </NavLink>
              ) : (
                <NavLink className="link" to="/order">
                  <SlBasketLoaded className="icon" />
                  {order.length > 0 ? (
                    <div className="counter">{order.length}</div>
                  ) : (
                    true
                  )}
                </NavLink>
              )}
            </>
          </Button>

          <Button>
            <NavLink className="link" to="/ready-orders">
              <RiTakeawayLine className="icon" />
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
