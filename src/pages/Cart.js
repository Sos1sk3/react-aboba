import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Cart() {
  const [itemInfoCura, setItemCura] = useState([]);
  const [itemInfoLand, setItemLand] = useState([]);
  const [itemInfoWard, setItemWard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchItemInfoCura = async () => {
      const userId = localStorage.getItem("userId");
      const response2 = await axios.get(`https://localhost:7241/api/CourierInventory/ByAccountId/${userId}`);
      const itemIds = response2.data.map(item => item.courierId);
      const response3 = await axios.get(`https://localhost:7241/api/courier?itemIds=${itemIds.join(",")}`);
      const itemData = response3.data;
      const filteredItems = itemData.filter(item => itemIds.includes(item.id));
      setItemCura(filteredItems);
    };

    const fetchItemInfoLand = async () => {
      const userId = localStorage.getItem("userId");
      const response2 = await axios.get(`https://localhost:7241/api/LandInventory/ByAccountId/${userId}`);
      const itemIds = response2.data.map(item => item.landId);
      const response3 = await axios.get(`https://localhost:7241/api/land?itemIds=${itemIds.join(",")}`);
      const itemData = response3.data;
      const filteredItems = itemData.filter(item => itemIds.includes(item.id));
      setItemLand(filteredItems);
    };

    const fetchItemInfoWard = async () => {
      const userId = localStorage.getItem("userId");
      const response2 = await axios.get(`https://localhost:7241/api/WardInventory/ByAccountId/${userId}`);
      const itemIds = response2.data.map(item => item.wardId);
      const response3 = await axios.get(`https://localhost:7241/api/ward?itemIds=${itemIds.join(",")}`);
      const itemData = response3.data;
      const filteredItems = itemData.filter(item => itemIds.includes(item.id));
      setItemWard(filteredItems);
    };

    fetchItemInfoCura();
    fetchItemInfoLand();
    fetchItemInfoWard();
  }, []);

  useEffect(() => {
    const totalPriceCura = itemInfoCura.reduce((total, item) => total + item.price, 0);
    const totalPriceLand = itemInfoLand.reduce((total, item) => total + item.price, 0);
    const totalPriceWard = itemInfoWard.reduce((total, item) => total + item.price, 0);
    const total = totalPriceCura + totalPriceLand + totalPriceWard;
    setTotalPrice(total);
  }, [itemInfoCura, itemInfoLand, itemInfoWard]);

  const removeItemCourier = async (itemId) => {
    await axios.delete(`https://localhost:7241/api/CourierInventory/Courier/${itemId}`);
    setItemCura(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const removeItemLand = async (itemId) => {
    await axios.delete(`https://localhost:7241/api/LandInventory/Land/${itemId}`);
    setItemLand(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const removeItemWard = async (itemId) => {
    await axios.delete(`https://localhost:7241/api/WardInventory/Ward/${itemId}`);
    setItemWard(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="content p-40">
      <h1 className="mb-40">Моя корзина</h1>

      <div>
        <div className="card d-flex flex-wrap">
          {itemInfoCura.map((item) => (
            <div key={item.id} className="cardM">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price} руб.</p>
              <button className="buttonDelete" onClick={() => removeItemCourier(item.id)}>Удалить</button>
            </div>
          ))}
          {itemInfoLand.map((item) => (
            <div key={item.id} className="cardM">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price} руб.</p>
              <button className="buttonDelete" onClick={() => removeItemLand(item.id)}>Удалить</button>
            </div>
          ))}
          {itemInfoWard.map((item) => (
            <div key={item.id} className="cardM">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price} руб.</p>
              <button className="buttonDelete" onClick={() => removeItemWard(item.id)}>Удалить</button>
            </div>
          ))}
        </div>
      </div>

      <div className="totalPrice">Общая сумма: {totalPrice} руб.</div>

      <Link to = "/Oformlen">
      <button className="buttonBuy">Оформить заказ</button>
      </Link>
    </div>
  );
}

export default Cart;
