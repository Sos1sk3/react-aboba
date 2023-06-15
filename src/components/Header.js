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
        <ul className="d-flex mr-30 justify-between">
          <li className="mr-30">
            <Link to="/cart" className="Link">
            <img src="/logo/Group.svg" alt="э"/>
              <span>Покупки</span>

            </Link>
            <span><a href = "https://youtu.be/3HrSVXP99kQ?t=14" target = "_blanc" ></a></span>
            <p><img src="https://sun9-17.userapi.com/impg/XQ8qgi5-BuKV4k3dRG-fdyHTlEJvlVBQ6VLRyg/SuGMHgKj-GI.jpg?size=750x1000&quality=96&sign=638c9f5091616d9860798416b7c181ce&type=album" hidden width="600" height="250"alt="Яблоко"></img></p>
           
          </li>
          <li className="mr-30">
            <Link to="/favorite" classname="Link">
            <img src="/logo/favoriteHead.svg" alt="э"/>
              <span>Избранное</span>
            </Link>
          </li>
          <li className="mr-30">
          
          <Link to="/User" className="Link">
          <img src="/logo/Union.svg" alt="э"/>
              <span>Аккаунт</span>

            </Link>
           
           
          </li>
          <li className="mr-30">
          
          <Link to="/login" className="Link">
          <img src="/logo/auto.svg" alt="э"/>
            <span>Авторизация</span>
            
            </Link>
          </li>
          {/* <li className="mr-30">
          
          <Link to="/Orders" className="Link">
          <img width="20" height="20" color='#9B9B9B' src="/logo/commun.svg" alt="э"/>
            <span>Заказы сообщества</span>
            
            </Link>
          </li> */}
        </ul>
        
      </header>
    );
}
export default Header;