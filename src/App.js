import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/index";
import products from "./components/products.json";
import Product from "./components/Product/index";
import Basket from "./components/Basket/index";

function App() {
  const [money, setMoney] = useState(10000);

  const [basket, setBasket] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <>
      <Header total={total} money={money} setMoney={setMoney} />

      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            basket={basket}
            setBasket={setBasket}
            total={total}
            money={money}
          />
        ))}
      </div>

      {total > 0 && (
        <Basket
          basket={basket}
          products={products}
          total={total}
          resetBasket={resetBasket}
        />
      )}
    </>
  );
}

export default App;
