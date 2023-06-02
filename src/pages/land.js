import React, { useState } from "react";
import axios from "axios";

function Land(props) {
  const[isAdded, setIsAdded] = React.useState(false);
  const[isAddedF, setIsAddedF] = React.useState(false);

  const onClickPlus =() =>{
    setIsAdded(!isAdded);
    if(isAdded===false ){
      axios.post('https://647881ab362560649a2debe7.mockapi.io/cart',props);
    }
  }

    const onClickFav =() =>{
      setIsAddedF(!isAddedF);
      if(isAddedF===false ){
        axios.post('https://647a00cea455e257fa642dbb.mockapi.io/pepe',props);
      }
  }
  return (
    <div className="cardM">
      <img src={props.Image} alt="sus" />
      <h4>
        <center>{props.Name}</center>
      </h4>
      <h5>Цена: {props.Price} руб</h5>
      <h5>Стиль: {props.Style}</h5>
      <h5>Описание: {props.Description}</h5>
      <img className="butad" style={{ width: "32px", height: "32px",margin:"5px" }} onClick={onClickPlus} src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"} alt="Add to cart" />
      <img className="butad" style={{ width: "32px", height: "32px",margin:"5px" }} onClick={onClickFav} src={isAddedF ? "/logo/favon.svg" : "/logo/favoff.svg"} alt="Add to cart" />
    </div>
  );
}
export default Land;