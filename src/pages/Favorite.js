import React, { useState, useEffect } from "react";
import axios from "axios";

function Favorite() {
  const [cartItemsWard, setCartItemsWard] = useState([]);

  useEffect(() => {
    axios
      .get("https://647a00cea455e257fa642dbb.mockapi.io/pepe")
      .then((response) => {
        setCartItemsWard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function removeItem(id) {
    axios
      .delete(`https://647a00cea455e257fa642dbb.mockapi.io/pepe/${id}`)
      .then(() => {
        const newCartItems = cartItemsWard.filter((item) => item.id !== id);
        setCartItemsWard(newCartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const totalPrice = cartItemsWard.reduce((acc, item) => acc + item.Price, 0);

  return (
    <div className="content p-40">
      <h1 className="mb-40">Мои Любимые</h1>

      <div className="card d-flex flex-wrap">
        {cartItemsWard.map((item) => (
          <div key={item.id} className="cardM">
            <img src={item.Image} alt={item.Name} />
            <h3>{item.Name}</h3>
            <p>{item.Price} руб.</p>
            <button className="buttonDelete" onClick={() => removeItem(item.id)}>Удалить</button>
          </div>
        ))}
      </div>

      <div className="total-price">
        Итого: {totalPrice} руб.
      </div>
        
      <button className="buttonBuy">Оформить заказ </button>
    </div>
  );
}

export default Favorite;