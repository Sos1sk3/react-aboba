import React, { useState, useEffect } from 'react';
import axios from 'axios';


function User({ onCloseUser, onClickOrders }) {
const [user, setUser] = useState(null);
const userId = localStorage.getItem('userId');
//const userLogin = localStorage.getItem('userLogin');

useEffect(() => {
if (userId) {
axios.get(`https://localhost:7241/api/account/${userId}`).then((res) => {
setUser(res.data);
}).catch((err) => {
console.error(err);
alert('Ошибка получения информации');
});
}
}, []);

if (!user) {
return <div>Сначала пройдите авторизацию</div>;
}

const Exit = async () => {
/*for (let i = 0; i < cartItems.length; i++) {
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
*/
localStorage.removeItem('userId'); // Удаляем id пользователя из LocalStorage
localStorage.removeItem('userLogin'); // Удаляем логин пользователя из LocalStorage
window.location.href = './';
};

return (

<div className="">


<div className="userdata">

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


</div>

<button onClick={Exit} className="ExitButton">Выйти из аккаунта</button>


</div>
);
}

export default User;