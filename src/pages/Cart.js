import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7241/api/ward")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function removeItem(id) {
    axios
      .delete(`https://647881ab362560649a2debe7.mockapi.io/cart/${id}`)
      .then(() => {
        const newCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(newCartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.Price, 0);

  return (
    <div className="content p-40">
      <h1 className="mb-40">Моя корзина</h1>

      <div className="card d-flex flex-wrap">
        {cartItems.map((item) => (
          <div key={item.id} className="cardM">
            <img src={item.Image} alt={item.Name} />
            <h3>{item.Name}</h3>
            <p>{item.Price} руб.</p>
            <button onClick={() => removeItem(item.id)}>Удалить</button>
          </div>
        ))}
      </div>

      <div className="total-price">
        Итого: {totalPrice} руб.
      </div>

      <button>Оформить заказ</button>
    </div>
  );
}

export default Cart;