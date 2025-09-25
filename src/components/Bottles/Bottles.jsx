// Bottles.jsx
import React, { use, useState } from "react";
import Bottle from "./Bottle";
import "./Bottle.css";
import { addToStroedCart } from "../../utilities/localstorage";
const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
      // console.log("bottle will be adde to the cart", bottle);
      const newCart = [...cart, bottle];
      setCart(newCart);

      // save the bottle id in the local storage
      addToStroedCart(bottle.id)
  };
  // console.log(bottles);

  return (
    <div>
          <h1>Bottles {bottles.length} </h1>
          <p>Added to cart:{cart.length} </p>

      <div className="bottles-container">
        {bottles.map((bottle) => (
            <Bottle
                key={bottle.id}
                bottle={bottle}
                handleAddToCart={handleAddToCart}
            >
                </Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles; 