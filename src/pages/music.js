function Music(props){
    return(
     
          <div className='cardM'>
            <img  src={props.ImageUrl} alt='sus'></img>
            <h4><center>{props.title}</center></h4>
                <h5>Цена: {props.Price} руб</h5>
                <h5>Дальность: {props.Range} к/м </h5>
                <h5>Самоцвет: {props.Gem} </h5>
                <h5>Тип: {props.ObsSen} </h5>
              <button className="buttonH">
                <h1><center>купить</center></h1>
              </button>
            
          </div>
  
    );
  }
  export default Music;