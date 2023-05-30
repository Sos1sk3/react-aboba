

function Heroes(props){
  return(
   
        <div className='cardH'>
          <img  src={props.ImageUrl} alt='sus'></img>
          <h3><center>{props.title}</center></h3>
          <div className="d-flex justify-between align-center">
            <button className="button d-flex">
              <h1><center>Выбрать</center></h1>
            </button>
          </div>
        </div>

  );
}
export default Heroes;