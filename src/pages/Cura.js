import React, { useState } from "react";

function Cura(props){
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

    return(
     
          <div className='cardM'>
            <img  src={props.ImageUrl} alt='sus'></img>
            <h4><center>{props.title}</center></h4>
                <h5>Описание: {props.Description} </h5>
                <h5>Цена: {props.Price} руб</h5>
                <h5>Скорость: {props.Speed} </h5>
                <h5>редкость: {props.Rarity}</h5>
                <h5>Полет: {props.Fly}</h5>
                <img className="butad" style={{ width: "20px", height: "20px" }} onClick={onClickPlus} src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"} alt="Add to cart" />
          </div>
  
    );
  }
  
  export default Cura;