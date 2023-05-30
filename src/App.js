import { Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Heroes from './pages/Heroes'
import Music from './pages/music'
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
  title: 'Вард "Глупышка"',
  ImageUrl: '/logo/music/varddva.jpg',
  Price: '150',
  Range:'900',
  Gem:'blue',
  ObsSen: 'Observer'
}
];

function App() {
  return (
    <div className="Wrapper clear"> 
      <Header />

      <Route path ="/heroes">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center'>
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
      <div className='dispay_pi d-flex align-center '>
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
        {arr.map((obj)=>(
          <Heroes
          title={obj.title}
          ImageUrl={obj.ImageUrl}
          />
        ))}
      </div>
      </div>
      </Route>
      <Route path ="/cura">
      <div className='content p-40'>
      <h1 className="mb-40">В нашем магазине вы ничего не найдёте </h1>
      <div className='d-flex align-center'>
        {arr.map((obj)=>(
          <Heroes
          title={obj.title}
          ImageUrl={obj.ImageUrl}
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
