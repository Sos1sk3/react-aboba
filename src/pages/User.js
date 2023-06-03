import React, { useState, useEffect } from 'react';
import axios from 'axios';


function User() {
const [user, setUser] = useState(null);
const userId = localStorage.getItem('userId');


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