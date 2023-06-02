import React from 'react';
import axios from 'axios';

function Registration() {
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [Steam, setSteam] = React.useState('');
const [name, setName] = React.useState('');
const [login, setLogin] = React.useState('');
const [countryCodeId, setCountryCodeId] = React.useState(' ');
const [options, setOptions] = React.useState([]);

React.useEffect(() => {
axios
.get('https://localhost:7045/CountryCodeForPhoneNum')
.then((res) => {
setOptions(
res.data.map((item) => ({
value: `${item.country} ${item.countryCode}`,
label: `(${item.country}) ${item.countryCode}`
})).map((option) => option.value) // преобразуем в массив строк
);
})
.catch((err) => console.log(err));
}, []);

const handleOptionChange = (event) => {
setCountryCodeId(event.target.value);
};



const handleLogin1 = (e) => {
e.preventDefault();
axios.post('https://646cd32b7b42c06c3b2c1813.mockapi.io/Users', {
email,
password,
name,
login,
Steam,
countryCodeId
}).then((res) => {
localStorage.setItem('token', res.data.token);
window.location.href = '/login';
}).catch((err) => {
console.error(err);
alert('Registration Error');
});
};


React.useEffect(() => {
document.querySelector('.overlay').style.display = 'block';
}, []);

return (
<div className="overlay">
<div className="Login">
<h2>Registration</h2>
<div className="login">
<input placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
</div>
<div className="login">
<input placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
<div className="login">
<input placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} />
</div>
<div className="login1" >
<select value={countryCodeId} onChange={handleOptionChange}>
{options.map((option) => (
<option key={option} value={option}>
{option}
</option>
))}
</select>

</div>
<div className="login">
<input placeholder="Ссылка на профиль Steam " value={Steam} onChange={(e) => setSteam(e.target.value)} />
</div>
<div className="login">
<input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
</div>


<button className="logBtn" onClick={handleLogin1}>

Sign up

</button>



</div>
</div>
);
}
export default Registration;