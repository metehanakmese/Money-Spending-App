import React from "react";
import "./styles.css";

function Product({ product, basket, setBasket, money, total }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount -= 1;

    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <>
      <div className="product">
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <div className="price">${product.price}</div>
        <div className="actions">
          <button
            className="sell-btn"
            disabled={!basketItem}
            onClick={removeBasket}
          >
            Sat
          </button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button
            className="buy-btn"
            onClick={addBasket}
            disabled={total + product.price > money}
          >
            Satın Al
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
