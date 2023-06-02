
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
/*const arrmusic =[
{
  
  Name: 'Вард "Глупышка"',
  Image: '/logo/music/varddva.jpg',
  Price: 150,
  RadiusOfVision: 900,
  Samocvet:'blue',
  Status: 'Observer',

},
{
  title: 'Вард "РубикКон"',
  ImageUrl: '/logo/music/vardodin.jpg',
  Price: 200,
  Range:1000,
  Gem:'Red',
  ObsSen: 'Observer',
 
},
{
  title: 'Вард "Плющ"',
  ImageUrl: '/logo/music/vardpoizon.jpg',
  Price: 150,
  Range:600,
  Gem:'Cold Ice',
  ObsSen: 'Sentry',
 
},
{
  title: 'Вард "Саурон"',
  ImageUrl: '/logo/music/vardsentr.jpg',
  Price: 400,
  Range:1200,
  Gem:'black',
  ObsSen: 'Sentry',
 
},
{
  title: 'Вард "Саурон"',
  ImageUrl: '/logo/music/vardsentr.jpg',
  Price: 400,
  Range: 1200,
  Gem:'black',
  ObsSen: 'Sentry',

},

];
*/
const arrLand =[
  {
    title: 'Ландшафт "Осенний"',
    ImageUrl: '/logo/Landshaft/landsh1.jpg',
    Price: 450,
    Style: 'Autumn',
    Description: 'Прекрасный ладншафт'
  },
  {
    title: 'Ландшафт "Морской"',
    ImageUrl: '/logo/Landshaft/landreef.jpg',
    Price: 5000,
    Style: 'UnderWater',
    Description: 'Супер, мне понравилось,класс'
  },
  {
    title: 'Ландшафт "Sand"',
    ImageUrl: '/logo/Landshaft/landsand.jpg',
    Price: 1500,
    Style: 'Sand King',
    Description: 'просто супер, даже добавить нечего'
  },
  {
    title: 'Ландшафт "Тропический"',
    ImageUrl: '/logo/Landshaft/landtrop.jpg',
    Price: 1200,
    Style: 'Snake edition',
    Description: 'оставляет готическое послевкусие'
  },
]
const arrCura =[
  {
    title: 'курьер "Golden boy"',
    ImageUrl: '/logo/Courier/funky.jpg',
    Price: 50,
    Speed: 450,
    Rarity:'rare',
    Description:'ходовой такой курьер',
    Fly: 'отсутствует'
  },
  {
    title: 'курьер "Китобой"',
    ImageUrl: '/logo/Courier/golden.jpg',
    Price: 50,
    Speed: 450,
    Rarity:'rare',
    Description:'прикольный язь',
    Fly: 'отсутствует'
  },
  {
    title: 'курьер "Бибизьяна"',
    ImageUrl: '/logo/Courier/monkey.jpg',
    Price: 50,
    Speed: 450,
    Rarity:'rare',
    Description:'Умеет лазать по деревьям',
    Fly: 'присутствует'
  },
  {
    title: 'курьер "Мамонтенок"',
    ImageUrl: '/logo/Courier/od.jpg',
    Price: 50,
    Speed: 450,
    Rarity:'rare',
    Description:'ходовой такой курьер',
    Fly: 'присутствует'
  },
  {
    title: 'курьер "Дед мороз"',
    ImageUrl: '/logo/Courier/pudd.jpg',
    Price: 50,
    Speed: 450,
    Rarity:'rare',
    Description:'Он воняет.',
    Fly: 'Yes'
  },
]

function App() {
  const [itemsWard, setItemsWard] = React.useState([]);
  const [cartItemsWard,setCartItemsWard] = React.useState([]);
    
  
  React.useEffect(() => {
        axios.get('https://localhost:7241/api/ward').then((res) => {
            setItemsWard(res.data);
        });


    }, []);
    const onAddToCartWard = (obj) =>{
      axios.post('https://647881ab362560649a2debe7.mockapi.io/cart',obj);
      setCartItemsWard((prev)=>[...prev,obj]);
    }
    const onRemoveWard = (id) => {
      axios.delete(`https://647881ab362560649a2debe7.mockapi.io/cart/${id}`);
      setCartItemsWard((prev)=>prev.filter(obj => obj.id !== id));
    }
    /*const onAddToCart = async (obj) => {
      try {
          if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
              axios.delete(`https://localhost:7045/UserCart/${obj.id}`);
              setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
          }
          else {
              const { data } = await axios.post('https://localhost:7045/UserCart', obj);
              setCartItems((prev) => [...prev, data]);
          }

      } catch (error) {
          alert('Do not add to cart');

      }
    };
    */






    const [itemsLand, setItemsLand] = React.useState([]);
    React.useEffect(() => {
        
        axios.get('https://647881ab362560649a2debe7.mockapi.io/title').then((res) => {
            setItemsLand(res.data);
        });

    }, []);

    const [itemsCura, setItemsCura] = React.useState([]);

  return (
    <div className="Wrapper clear"> 
      <Header />


      <Route path ="/heroes">
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
      </Route>

      <Route path ="/ward">

      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы найдёте </h1>
      <div className='dispay_pi d-flex align-center flex-wrap '>
        {itemsWard.map((obj)=>(
          <Ward
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
      <h1>Вывод массива из бэка</h1>

      </div>
      </Route>
      <Route path ="/land">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center flex-wrap'>
        {arrLand.map((obj)=>(
          <Land
          title={obj.title}
          ImageUrl={obj.ImageUrl}
          Price={obj.Price}
          Style={obj.Style}
          Description={obj.Description}
          />
        ))}
      </div>
      </div>
      </Route>
      <Route path ="/cura">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center flex-wrap'>
        {arrCura.map((obj)=>(
          <Cura
          title={obj.title}
          ImageUrl={obj.ImageUrl}
          Price={obj.Price}
          Speed ={obj.Speed}
          Rarity={obj.Rarity}
          Description={obj.Description}
          Fly={obj.Fly}
          />
        ))}
      </div>
      </div>
      </Route>
      <Route path ="/cart">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center flex-wrap'>
          <Cart/>
        </div>

        </div>
      </Route>
      <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/login"> 
      <Autorization /> 
      </Route>
      <Route path="/Registration">
        <Registration />
      </Route>
      <Route path="/User">
      <div className='content p-40'>
       
        <User/>
        </div>
      </Route>

    </div>

  );
}

export default App;
