import { Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Heroes from './pages/Heroes'
import Music from './pages/music'
import Land from './pages/land'
import Cura from './pages/Cura'

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
const arrmusic =[
{
  title: 'Вард "Глупышка"',
  ImageUrl: '/logo/music/varddva.jpg',
  Price: '150',
  Range:'900',
  Gem:'blue',
  ObsSen: 'Observer'
},
{
  title: 'Вард "РубикКон"',
  ImageUrl: '/logo/music/vardodin.jpg',
  Price: '200',
  Range:'1000',
  Gem:'Red',
  ObsSen: 'Observer'
},
{
  title: 'Вард "Плющ"',
  ImageUrl: '/logo/music/vardpoizon.jpg',
  Price: '150',
  Range:'600',
  Gem:'Cold Ice',
  ObsSen: 'Sentry'
},
{
  title: 'Вард "Саурон"',
  ImageUrl: '/logo/music/vardsentr.jpg',
  Price: '400',
  Range:'1200',
  Gem:'black',
  ObsSen: 'Sentry'
},
{
  title: 'Вард "Саурон"',
  ImageUrl: '/logo/music/vardsentr.jpg',
  Price: '400',
  Range:'1200',
  Gem:'black',
  ObsSen: 'Sentry'
},

];
const arrLand =[
  {
    title: 'Ландшафт "Осенний"',
    ImageUrl: '/logo/Landshaft/landsh1.jpg',
    Price: '450',
    Style: 'Autumn',
    Description: 'Прекрасный ладншафт'
  },
  {
    title: 'Ландшафт "Морской"',
    ImageUrl: '/logo/Landshaft/landreef.jpg',
    Price: '5000',
    Style: 'UnderWater',
    Description: 'Супер, мне понравилось,класс'
  },
  {
    title: 'Ландшафт "Песочный"',
    ImageUrl: '/logo/Landshaft/landsand.jpg',
    Price: '1500',
    Style: 'Sand King',
    Description: 'просто супер, даже добавить нечего'
  },
  {
    title: 'Ландшафт "Тропический"',
    ImageUrl: '/logo/Landshaft/landtrop.jpg',
    Price: '1200',
    Style: 'Snake edition',
    Description: 'оставляет готическое послевкусие'
  },
]
const arrCura =[
  {
    title: 'курьер "Золотой мальчик"',
    ImageUrl: '/logo/Courier/funky.jpg',
    Price: '50',
    Speed: '450',
    Rarity:'rare',
    Description:'ходовой такой курьер',
    Fly: 'отсутствует'
  },
  {
    title: 'курьер "Китобой"',
    ImageUrl: '/logo/Courier/golden.jpg',
    Price: '50',
    Speed: '450',
    Rarity:'rare',
    Description:'прикольный язь',
    Fly: 'отсутствует'
  },
  {
    title: 'курьер "Бибизьяна"',
    ImageUrl: '/logo/Courier/monkey.jpg',
    Price: '50',
    Speed: '450',
    Rarity:'rare',
    Description:'Умеет лазать по деревьям',
    Fly: 'присутствует'
  },
  {
    title: 'курьер "Мамонтенок"',
    ImageUrl: '/logo/Courier/od.jpg',
    Price: '50',
    Speed: '450',
    Rarity:'rare',
    Description:'ходовой такой курьер',
    Fly: 'присутствует'
  },
  {
    title: 'курьер "Дед мороз"',
    ImageUrl: '/logo/Courier/pudd.jpg',
    Price: '50',
    Speed: '450',
    Rarity:'rare',
    Description:'Он воняет.',
    Fly: 'Yes'
  },
]
function App() {
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

      <Route path ="/music">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы найдёте </h1>
      <div className='dispay_pi d-flex align-center flex-wrap '>
        {arrmusic.map((obj)=>(
          <Music
          title={obj.title}
          ImageUrl={obj.ImageUrl}
          Price={obj.Price}
          Range={obj.Range}
          Gem={obj.Gem}
          ObsSen={obj.ObsSen}
          />
        ))}
      </div>
      </div>
      </Route>
      <Route path ="/land">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center'>
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
      <Route path="/" exact>
      <Home />
      </Route>

    </div>
  );
}

export default App;
