import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function User({ onCloseUser, orders = [20], cartItems = [20], favoriteItems = [20], onClickOrders }) {
const [user, setUser] = useState(null);
const userId = localStorage.getItem('userId');
const userLogin = localStorage.getItem('userLogin');

useEffect(() => {
if (userId) {
axios.get(`https://646cd32b7b42c06c3b2c1813.mockapi.io/Users/${userId}`).then((res) => {
setUser(res.data);
}).catch((err) => {
console.error(err);
alert('Ошибка получения информации');
});
}
}, []);

if (!user) {
return <div>First log in...</div>;
}

const Exit = async () => {
for (let i = 0; i < cartItems.length; i++) {
const item = cartItems[i];
await axios.delete('https://localhost:7045/UserCart/' + item.id);
}
for (let i = 0; i < favoriteItems.length; i++) {
const item = favoriteItems[i];
await axios.delete('https://localhost:7045/Favorites/' + item.id);
}
for (let i = 0; i < orders.length; i++) {
const item = orders[i];
await axios.delete('https://localhost:7045/UserOrders/' + item.id);
}
localStorage.removeItem('userId'); // Удаляем id пользователя из LocalStorage
localStorage.removeItem('userLogin'); // Удаляем логин пользователя из LocalStorage
window.location.href = '/login';
};

return (
    
<div className="">
<div className="">

<button className="removeButton" onClick={onCloseUser}>
{ <img width={21} height={21} src="/logo/hedota/image1.png" alt="Remove" /> }
</button>

<div className="userdata">
  <h2>Пользователь</h2>
  <div>
    <span>Логин:</span>
    <b>{user.login} </b>
  </div>
  <div>
    <span>Имя:</span>
    <b>{user.name} </b>
  </div>
  <div>
    <span>Почта:</span>
    <b>{user.email} </b>
  </div>
  <div>
    <span>Телефон:</span>
    <b>{user.countryCodeId}{user.phoneNum}</b>
  </div>
  <b onClick={onClickOrders} className="clickOrders">Заказы</b>
</div>

<button onClick={Exit} className="ExitButton">Log out</button>

</div>
</div>
);
}

export default User;