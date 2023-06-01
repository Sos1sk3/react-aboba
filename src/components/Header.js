import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="d-flex justify-between align-center p-40">
        <a href='/'>
        <div className="d-flex align-center">
          
          <img src="/logo/logo.png" width="50" height="50"  alt="э"/>
          
          <div>
             <h3 className="text-uppercase">Пудж На Диване</h3>
              <p className="opacity-3"> Магазин предметов по Dota 2</p>
          </div>
        </div>
        </a>
        <ul className="d-flex">
          <li className="mr-30">

            <img src="/logo/Group.svg" alt="э"/>
            <Link to="/cart" className="Link">
              <span>Покупки</span>

            </Link>
            <span><a href = "https://youtu.be/3HrSVXP99kQ?t=14" target = "_blanc" ></a></span>
            <p><img src="https://sun9-17.userapi.com/impg/XQ8qgi5-BuKV4k3dRG-fdyHTlEJvlVBQ6VLRyg/SuGMHgKj-GI.jpg?size=750x1000&quality=96&sign=638c9f5091616d9860798416b7c181ce&type=album" hidden width="600" height="250"alt="Яблоко"></img></p>
           
          </li>
          <li>
          <img src="/logo/Union.svg" alt="э"/>
          <Link to="/User" className="Link">
              <span>Аккаунт</span>

            </Link>
           
           
          </li>
          <li>
          <Link to="/login" className="Link">
          <img src="/logo/Union.svg" alt="э"/>
            <span>Авторизация</span>
            
            </Link>
          </li>
        </ul>
        
      </header>
    );
}
export default Header;