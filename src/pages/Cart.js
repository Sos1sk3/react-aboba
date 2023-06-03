import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [itemInfoCura, setItemCura] = useState([]);
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

    fetchItemInfoCura();
  }, []);

  const removeItemCourier = async (itemId) => {
      await axios.delete(`https://localhost:7241/api/CourierInventory/Courier/${itemId}`);
      setItemCura(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const [itemInfoLand, setItemLand] = useState([]);
  useEffect(() => {
    const fetchItemInfoLand = async () => {

        const userId = localStorage.getItem("userId");

        const response2 = await axios.get(`https://localhost:7241/api/LandInventory/ByAccountId/${userId}`);
        const itemIds = response2.data.map(item => item.landId);

        const response3 = await axios.get(`https://localhost:7241/api/land?itemIds=${itemIds.join(",")}`);
        const itemData = response3.data;

        const filteredItems = itemData.filter(item => itemIds.includes(item.id));

        setItemLand(filteredItems);

    };

    fetchItemInfoLand();
  }, []);

  const removeItemLand = async (itemId) => {
      await axios.delete(`https://localhost:7241/api/LandInventory/Land/${itemId}`);
      setItemLand(prevItems => prevItems.filter(item => item.id !== itemId));

  };

  const [itemInfoWard, setItemWard] = useState([]);

  useEffect(() => {
    const fetchItemInfoWard = async () => {

        const userId = localStorage.getItem("userId");

        const response2 = await axios.get(`https://localhost:7241/api/WardInventory/ByAccountId/${userId}`);
        const itemIds = response2.data.map(item => item.wardId);

        const response3 = await axios.get(`https://localhost:7241/api/ward?itemIds=${itemIds.join(",")}`);
        const itemData = response3.data;

        const filteredItems = itemData.filter(item => itemIds.includes(item.id));

        setItemWard(filteredItems);

    };

    fetchItemInfoWard();
  }, []);
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

      <button className="buttonBuy">Оформить заказ</button>
    </div>
  );
}

export default Cart;
