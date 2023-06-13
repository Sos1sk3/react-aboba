import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registration() {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [Steam, setSteam] = React.useState('');
const [name, setName] = React.useState('');
const [login, setLogin] = React.useState('');



const handleLogin1 = (e) => {
e.preventDefault();
axios.post('https://localhost:7241/api/account', {
email,
password,
name,
login,
Steam,
}).then((res) => {
localStorage.setItem('token', res.data.token);
window.location.href = '/login';
}).catch((err) => {
console.error(err);
alert('Registration Error');
});
};


return (
<div className="overlay">
<div className="Login">
<Link to="/login">
        <h2>вернуться назад</h2>
        </Link>
<h2>Регистрация</h2>
<div className="login">
<input placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
</div>
<div className="login">
<input placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<div className="login">
<input placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
</div>
<div className="login">
<input placeholder="Ссылка на профиль Steam " value={Steam} onChange={(e) => setSteam(e.target.value)} />
</div>
<div className="login">
<input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
</div>


<button className="logBtn" onClick={handleLogin1}>

Зарегестрировать пользователя

</button>



</div>
</div>
);
}
export default Registration