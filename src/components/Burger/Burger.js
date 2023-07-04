import React from "react";
import "./Burger.css";

function Burger({ name, img }) {
  return (
    <div className="burger-block">
      <img className="burger" src={img}></img>
      <h2 className="burger-name">{name}</h2>
    </div>
  );
}
 
export default Burger;
