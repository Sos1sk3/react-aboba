import React, { useState } from "react";
import axios from "axios";

function Cura(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedF, setIsAddedF] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if (isAdded === false) {
      const userId = localStorage.getItem("userId");
      const courierId = props.Id;

      axios.post("https://localhost:7241/api/CourierInventory", {
          AccountId: userId,
          CourierId: courierId,
        })
        
    }
  };

  const onClickFav = () => {
    setIsAddedF(!isAddedF);
    if (isAddedF === false) {
      const userId = localStorage.getItem("userId");
      const courierId = props.Id;
  
      axios.post("https://localhost:7241/api/CourierLiked", {
          AccountId: userId,
          CourierId: courierId,
        })
    
    }
  };

  return (
    <div className="cardM">
      <img src={props.Image} alt="sus" />
      <h4>
        <center>{props.Name}</center>
      </h4>
      <h5>Описание: {props.Description} </h5>
      <h5>Цена: {props.Price} руб</h5>
      <h5>Скорость: {props.Speed} </h5>
      <h5>Редкость: {props.Rarity}</h5>
      <img
        className="butad"style={{ width: "32px", height: "32px", margin: "5px" }} onClick={onClickPlus} src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"}
        alt="Add to cart"
      />
      { <img className="butad" style={{ width: "32px", height: "32px", margin: "5px" }} onClick={onClickFav} src={isAddedF ? "/logo/favon.svg" : "/logo/favoff.svg"} alt="Add to cart"
      /> }
    </div>
  );
}

export default Cura;
