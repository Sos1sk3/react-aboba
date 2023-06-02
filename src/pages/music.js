import React, { useState } from "react";
import axios from "axios";

function Ward(props) {
  
  const[isAdded, setIsAdded] = React.useState(false);
  const[isAddedF, setIsAddedF] = React.useState(false);

  const onClickPlus =() =>{
    setIsAdded(!isAdded);
    if(isAdded===false ){
      axios.post('https://647881ab362560649a2debe7.mockapi.io/cart',props); //кидаем сюда данные если нажали купить
    }
  }

    const onClickFav =() =>{
      setIsAddedF(!isAddedF);
      if(isAddedF===false ){
        axios.post('https://647a00cea455e257fa642dbb.mockapi.io/pepe',props); //кидаем сюда данные если нажали Любимые
      }
  }

    return (
      <div className="cardM">
        <img src={props.Image} alt="sus"></img>
        <h5>
          <center>{props.Name}</center>
        </h5>
        <h5>Цена: {props.Price} руб</h5>
        <h5>Дальность: {props.RadiusOfVision} к/м </h5>
        <h5>Самоцвет: {props.Samocvet} </h5>
        <h5>Тип: {props.Status} </h5>

        <img className="butad" style={{ width: "32px", height: "32px",margin:"5px" }} onClick={onClickPlus} src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"} alt="Add to cart" />
        <img className="butad" style={{ width: "32px", height: "32px",margin:"5px" }} onClick={onClickFav} src={isAddedF ? "/logo/favon.svg" : "/logo/favoff.svg"} alt="Add to cart" />
      </div>
      
    );
  


}
export default Ward;