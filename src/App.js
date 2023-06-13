
import Header from './components/Header';
import Home from './pages/Home';
import Heroes from './pages/Heroes'
import Ward from './pages/music'
import Land from './pages/land'
import Cura from './pages/Cura'
import React from "react";
import axios from 'axios';
import Registration from './pages/Registration';
import Autorization from './pages/Autorization';
import User from './pages/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Oformlen from './pages/Oformlen';


const arr = [
  {
    title: 'Alcemist',
    ImageUrl: '/logo/hedota/image1.png'

  },
  {
    title: 'meepo',
    ImageUrl: '/logo/hedota/image4.png'

  },
  {
    title: 'tinker',
    ImageUrl: '/logo/hedota/image7.png'

  },
  {
    title: 'earth spirit',
    ImageUrl: '/logo/hedota/image16.png'

  },
  {
    title: 'earth spirit',
    ImageUrl: '/logo/hedota/image16.png'

  },
  {
    title: 'earth spirit',
    ImageUrl: '/logo/hedota/image16.png'

  },
];


function App() {
  const [itemsWard, setItemsWard] = React.useState([]);
  const [cartItemsWard,setCartItemsWard] = React.useState([]);
    
  
  React.useEffect(() => {
        axios.get('https://localhost:7241/api/ward').then((res) => {
            setItemsWard(res.data);
        });


    }, []);
   

    const [itemsLand, setItemsLand] = React.useState([]);
    React.useEffect(() => {
        
        axios.get('https://localhost:7241/api/land').then((res) => { //сюда ссылка на ландшафты из базы данных
            setItemsLand(res.data);
        });

    }, []);

    const [itemsCura, setItemsCura] = React.useState([]);
    React.useEffect(() => {
        
      axios.get('https://localhost:7241/api/courier').then((res) => { //сюда ссылка на курьеров из базы данных
          setItemsCura(res.data);
      });

  }, []);

  return (
    <div className="Wrapper clear"> 
      <Header />


      {/* <Route path ="/heroes">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center flex-wrap '>
        {arr.map((obj)=>(
          <Heroes
          title={obj.title}
          ImageUrl={obj.ImageUrl}
          />
        ))}
      </div>
      </div>
      </Route> */}

      <Route path ="/ward">

      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы найдёте </h1>
      <div className='dispay_pi d-flex align-center flex-wrap '>
        {itemsWard.map((obj)=>(
          <Ward
          Id={obj.id}
          name={obj.name}
          image={obj.image}
          price={obj.price}
          radiusOfVision={obj.radiusOfVision}
          samocvet={obj.samocvet}
          status={obj.status}
          Add={obj.Add}
          //OnPlus={()=>console.log('нажали плюс')}
          />
        ))}
        

      </div>

      </div>
      </Route>
      <Route path ="/land">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы найдёте </h1>
      <div className='d-flex align-center flex-wrap'>
        {itemsLand.map((obj)=>(
          <Land
          Id={obj.id}
          Name={obj.name}
          Image={obj.image}
          Price={obj.price}
          Style={obj.style}
          Description={obj.description}
          />
        ))}
      </div>
      </div>
      </Route>
      <Route path ="/cura">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы найдёте </h1>
      <div className='d-flex align-center flex-wrap'>
        {itemsCura.map((obj)=>(
          <Cura
          Id={obj.id}
          Name={obj.name}
          Image={obj.image}
          Price={obj.price}
          Speed ={obj.movespeed}
          Rarity={obj.rarity}
          Description={obj.description}
          Rating={obj.rating}
          />
        ))}
      </div>
      </div>
      </Route>
      <Route path ="/cart">
      <div className='content p-40'>
      <h1 className="mb-40"> </h1>
      <div className='d-flex align-center flex-wrap'>
      <Cart/>
        </div>

        </div>
      </Route>
      <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/login">
      <div className='content p-40'>
      <h1 className="mb-40"> </h1>
      <div className='d-flex align-center flex-wrap'>
      <Autorization />
        </div>

        </div> 
       
      </Route>
      <Route path="/Registration">
        <Registration />
      </Route>
      <Route path="/User">
      <div className='content p-40'>
       
        <User/>
        </div>
      </Route>
      <Route path = "/favorite">
      <div className='content p-40'>
      <h1 className="mb-40"> </h1>
      <div className='d-flex align-center flex-wrap'>
          <Favorite/>
        </div>
        </div>
      </Route>
      <Route path="/Oformlen">
        <div className='content p-40'>
          <Oformlen/>
          </div>
        </Route>
    </div>
      
  );
}

export default App;
