import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Favorite() {
  const [itemInfoCura, setItemCura] = useState([]);
  const [itemInfoLand, setItemLand] = useState([]);
  const [itemInfoWard, setItemWard] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      history.push("/login");
    } else {
      const fetchItemInfoCura = async () => {
        try {
          const response2 = await axios.get(`https://localhost:7241/api/CourierLiked/ByAccountId/${userId}`);
          const itemIds = response2.data.map(item => item.courierId);
          const response3 = await axios.get(`https://localhost:7241/api/courier?itemIds=${itemIds.join(",")}`);
          const itemData = response3.data;
          const filteredItems = itemData.filter(item => itemIds.includes(item.id));
          setItemCura(filteredItems);
        } catch (error) {
          console.error("Ошибка при получении информации о товарах (Courier)", error);
        }
      };

      const fetchItemInfoLand = async () => {
        try {
          const response2 = await axios.get(`https://localhost:7241/api/LandLiked/ByAccountId/${userId}`);
          const itemIds = response2.data.map(item => item.landId);
          const response3 = await axios.get(`https://localhost:7241/api/land?itemIds=${itemIds.join(",")}`);
          const itemData = response3.data;
          const filteredItems = itemData.filter(item => itemIds.includes(item.id));
          setItemLand(filteredItems);
        } catch (error) {
          console.error("Ошибка при получении информации о товарах (Land)", error);
        }
      };

      const fetchItemInfoWard = async () => {
        try {
          const response2 = await axios.get(`https://localhost:7241/api/WardLiked/ByAccountId/${userId}`);
          const itemIds = response2.data.map(item => item.wardId);
          const response3 = await axios.get(`https://localhost:7241/api/ward?itemIds=${itemIds.join(",")}`);
          const itemData = response3.data;
          const filteredItems = itemData.filter(item => itemIds.includes(item.id));
          setItemWard(filteredItems);
        } catch (error) {
          console.error("Ошибка при получении информации о товарах (Ward)", error);
        }
      };

      fetchItemInfoCura();
      fetchItemInfoLand();
      fetchItemInfoWard();
    }
  }, [history]);

  const removeItemCourier = async (courierId) => {
    try {
      const accountId = localStorage.getItem("userId");
      await axios.delete(`https://localhost:7241/api/CourierLiked/ByAccountAndCourier/${accountId}/${courierId}`);
      setItemCura(prevItems => prevItems.filter(item => item.id !== courierId));
    } catch (error) {
      console.error("Ошибка при удалении товара (Courier)", error);
    }
  };
  
  const removeItemLand = async (landId) => {
    try {
      const accountId = localStorage.getItem("userId");
      await axios.delete(`https://localhost:7241/api/LandLiked/ByAccountAndLand/${accountId}/${landId}`);
      setItemLand(prevItems => prevItems.filter(item => item.id !== landId));
    } catch (error) {
      console.error("Ошибка при удалении товара (Land)", error);
    }
  };
  
  const removeItemWard = async (wardId) => {
    try {
      const accountId = localStorage.getItem("userId");
      await axios.delete(`https://localhost:7241/api/WardLiked/ByAccountAndWard/${accountId}/${wardId}`);
      setItemWard(prevItems => prevItems.filter(item => item.id !== wardId));
    } catch (error) {
      console.error("Ошибка при удалении товара (Ward)", error);
    }
  };

  return (
    <div className="content p-40">
      <h1 className="mb-40">Избранное</h1>

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
    </div>
  );
}

export default Favorite;
