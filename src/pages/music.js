import React, { useState } from "react";
import axios from "axios";

function Ward(props) {
  
  const[isAdded, setIsAdded] = React.useState(false);

  const onClickPlus =() =>{
    setIsAdded(!isAdded);
    if(isAdded===false ){
      axios.post('https://647881ab362560649a2debe7.mockapi.io/cart',props);
    }
    
    
  }
    return (
      <div className="cardM">
        <img src={props.ImageUrl} alt="sus"></img>
        <h5>
          <center>{props.title}</center>
        </h5>
        <h5>Цена: {props.Price} руб</h5>
        <h5>Дальность: {props.Range} к/м </h5>
        <h5>Самоцвет: {props.Gem} </h5>
        <h5>Тип: {props.ObsSen} </h5>

        <img className="butad" style={{ width: "20px", height: "20px" }} onClick={onClickPlus} src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"} alt="Add to cart" />
      </div>
      
    );
  

}

export default Ward;