import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          
        <h1><a href = "https://www.youtube.com/watch?v=1RNft8NLFYo" target = "_blanc" >Пудж На Диване <p>Интернет-магазин шмоток по доте</p> </a></h1>
        <Search />
        </div>
         
          <div className="vibor_pokupki d-block justify-between">

          <h1>Покупка предметов на героев</h1>
            <div className="buhanka">
 
            <Link to ="/heroes">
            <img  src="/logo/pic/seeker.jpeg"  alt="sus"  width={1000} height={300}/>
            </Link>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">

              </div>
             
  
            </div>

          </div>
          <h1>Покупка Вардов</h1>
          <div className="buhanka">
         
          <Link to ="/music">
            <img  src="/logo/music/vard1.jpg"  alt="sus" width={1000} height={300}/>
            </Link>
          </div>
       
          <h1>Покупка ландшафта</h1>
          <div className="buhanka">
          <Link to ="/land">
            <img  src="/logo/pic/land2.jpeg"  alt="sus" width={1000} height={300}/>
            </Link>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">

              </div>
      
              
            </div>
          
          </div>
          <h1>Покупка курьеров</h1>
          <div className="buhanka">
          <Link to ="/cura">
            <img  src="/logo/pic/courier.jpg"  alt="sus" width={1000} height={300}/>
            </Link>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">

              </div>
      
              
            </div>
          
          </div>
          </div>
      </div>
    );
}
export default Home;