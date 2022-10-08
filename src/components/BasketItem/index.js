import React from "react";
import "./styles.css";

function BasketItem({ product, item }) {
  return (
    <>
      <li className="basket-item">
      {product.title} <span>x {item.amount}</span>
      </li>
    </>
  );
}

export default BasketItem;
