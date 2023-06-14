import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

function Cart() {
  const userId = localStorage.getItem("userId");
  const history = useHistory();
  const [itemInfoCura, setItemCura] = useState([]);
  const [itemInfoLand, setItemLand] = useState([]);
  const [itemInfoWard, setItemWard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    if (!userId) {
      history.push("/login");
    }

    const fetchItemInfoCura = async () => {
      const response2 = await axios.get(`https://localhost:7241/api/CourierInventory/ByAccountId/${userId}`);
      const itemIds = response2.data.map(item => item.courierId);
      const response3 = await axios.get(`https://localhost:7241/api/courier?itemIds=${itemIds.join(",")}`);
      const itemData = response3.data;
      const filteredItems = itemData.filter(item => itemIds.includes(item.id));
      filteredItems.forEach(item => {
        const matchingItems = response2.data.filter(i => i.courierId === item.id || i.landId === item.id || i.wardId === item.id);
        item.quantity = matchingItems.reduce((total, item) => total + item.quantity, 0);
      });
      setItemCura(filteredItems);
    };

    const fetchItemInfoLand = async () => {
      const response2 = await axios.get(`https://localhost:7241/api/LandInventory/ByAccountId/${userId}`);
      const itemIds = response2.data.map(item => item.landId);
      const response3 = await axios.get(`https://localhost:7241/api/land?itemIds=${itemIds.join(",")}`);
      const itemData = response3.data;
      const filteredItems = itemData.filter(item => itemIds.includes(item.id));
      filteredItems.forEach(item => {
        const matchingItems = response2.data.filter(i => i.courierId === item.id || i.landId === item.id || i.wardId === item.id);
        item.quantity = matchingItems.reduce((total, item) => total + item.quantity, 0);
      });
      setItemLand(filteredItems);
    };

    const fetchItemInfoWard = async () => {
      const response2 = await axios.get(`https://localhost:7241/api/WardInventory/ByAccountId/${userId}`);
      const itemIds = response2.data.map(item => item.wardId);
      const response3 = await axios.get(`https://localhost:7241/api/ward?itemIds=${itemIds.join(",")}`);
      const itemData = response3.data;
    
      const filteredItems = itemData.map(item => {
        const matchingItems = response2.data.filter(i => i.wardId === item.id);
        if (matchingItems.length > 0) {
          item.quantity = matchingItems.reduce((total, i) => total + i.quantity, 0);
          return {
            ...item,
            accountId: matchingItems[0].accountId,
            wardId: matchingItems[0].wardId
          };
        } else {
          return null;
        }
      });
    
      setItemWard(filteredItems.filter(item => item !== null));
    };
    

    fetchItemInfoCura();
    fetchItemInfoLand();
    fetchItemInfoWard();
  }, [userId, history]);

  useEffect(() => {
    const totalPriceCura = itemInfoCura.reduce((total, item) => total + item.price, 0);
    const totalPriceLand = itemInfoLand.reduce((total, item) => total + item.price, 0);
    const totalPriceWard = itemInfoWard.reduce((total, item) => total + item.price, 0);
    const total = totalPriceCura + totalPriceLand + totalPriceWard;
    setTotalPrice(total);
    setIsCartEmpty(total === 0);
  }, [itemInfoCura, itemInfoLand, itemInfoWard]);

  const handleCheckout = async () => {
    if (isCartEmpty) {
      return; // Нет товаров в корзине, ничего не делаем
    }
  
    try {
      const deleteRequests = [];
  
      for (const item of itemInfoCura) {
        deleteRequests.push(axios.delete(`https://localhost:7241/api/CourierInventory/Courier/${item.id}`));
      }
  
      for (const item of itemInfoLand) {
        deleteRequests.push(axios.delete(`https://localhost:7241/api/LandInventory/Land/${item.id}`));
      }
  
      for (const item of itemInfoWard) {
        deleteRequests.push(axios.delete(`https://localhost:7241/api/WardInventory/Ward/${item.id}`));
      }
  
      await Promise.all(deleteRequests);
  
      setItemCura([]);
      setItemLand([]);
      setItemWard([]);
      // history.push("/Oformlen"); // Опционально: переход на другую страницу после оформления заказа
    } catch (error) {
      // Обработка ошибок при удалении
      console.error("Ошибка при удалении элементов из корзины", error);
    }
  };
  
  const removeItemCourier = async (itemId) => {
    try {
      const itemToRemove = itemInfoCura.find(item => item.id === itemId);
      if (!itemToRemove) return;
  
      const { accountId, wardId } = itemToRemove;
  
      await axios.delete(`https://localhost:7241/api/CourierInventory/Courier/${itemId}`);
  
      setItemCura(prevItems => prevItems.filter(item => item.accountId !== accountId || item.wardId !== wardId));
    } catch (error) {
      console.error("Ошибка при удалении элемента из корзины (Courier)", error);
    }
  };
  
  const removeItemLand = async (itemId) => {
    try {
      const itemToRemove = itemInfoLand.find(item => item.id === itemId);
      if (!itemToRemove) return;
  
      const { accountId, wardId } = itemToRemove;
  
      await axios.delete(`https://localhost:7241/api/LandInventory/Land/${itemId}`);
  
      setItemLand(prevItems => prevItems.filter(item => item.accountId !== accountId || item.wardId !== wardId));
    } catch (error) {
      console.error("Ошибка при удалении элемента из корзины (Land)", error);
    }
  };
  
  const removeItemWard = async (itemId) => {
    try {
      const itemToRemove = itemInfoWard.find(item => item.id === itemId);
      if (!itemToRemove) return;
  
      const { accountId, wardId } = itemToRemove;
  
      await axios.delete(`https://localhost:7241/api/WardInventory/ByAccountIdAndWardId/${accountId}/${wardId}`);
  
      setItemWard(prevItems => prevItems.filter(item => item.accountId !== accountId || item.wardId !== wardId));
    } catch (error) {
      console.error("Ошибка при удалении элемента из корзины (Ward)", error);
    }
  };
  
  
  

  const getItemQuantity = (itemId, category) => {
    let quantity = 0;

    switch (category) {
      case 'courier':
        quantity = itemInfoCura.filter(item => item.id === itemId).reduce((total, item) => total + item.quantity, 0);
        break;
      case 'land':
        quantity = itemInfoLand.filter(item => item.id === itemId).reduce((total, item) => total + item.quantity, 0);
        break;
      case 'ward':
        quantity = itemInfoWard.filter(item => item.id === itemId).reduce((total, item) => total + item.quantity, 0);
        break;
      default:
        break;
    }

    return quantity;
  };

  return (
    <div className="content p-40">
      <h1 className="mb-40">Моя корзина</h1>
      {isCartEmpty ? (
        <div>
          <div>Корзина пуста</div>
        </div>
      ) : (
        <div>
          <div className="card d-flex flex-wrap">
            {itemInfoCura.map((item) => (
              <div key={item.id} className="cardM">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} руб.</p>
                <button className="buttonDelete" onClick={() => removeItemCourier(item.id)}>Удалить</button>
                <div>Добавлено: {getItemQuantity(item.id, 'courier')}</div>
              </div>
            ))}
            {itemInfoLand.map((item) => (
              <div key={item.id} className="cardM">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} руб.</p>
                <button className="buttonDelete" onClick={() => removeItemLand(item.id)}>Удалить</button>
                <div>Добавлено: {getItemQuantity(item.id, 'land')}</div>
              </div>
            ))}
            {itemInfoWard.map((item) => (
              <div key={item.id} className="cardM">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.price} руб.</p>
                <button className="buttonDelete" onClick={() => removeItemWard(item.id)}>Удалить</button>
                <div>Добавлено: {getItemQuantity(item.id, 'ward')}</div>
              </div>
            ))}
          </div>

          <div className="totalPrice">Общая сумма: {totalPrice} руб.</div>

          {!isCartEmpty && (
            <Link to="/Oformlen">
              <button className="buttonBuy" onClick={handleCheckout}>Оформить заказ</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
