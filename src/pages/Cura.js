function Cura(props){
    return(
     
          <div className='cardM'>
            <img  src={props.ImageUrl} alt='sus'></img>
            <h4><center>{props.title}</center></h4>
                <h5>Описание: {props.Description} </h5>
                <h5>Цена: {props.Price} руб</h5>
                <h5>Скорость: {props.Speed} </h5>
                <h5>редкость: {props.Rarity}</h5>
                <h5>Полет: {props.Fly}</h5>
              <button className="buttonH">
                <h1><center>купить</center></h1>
              </button>
            
          </div>
  
    );
  }
  export default Cura;