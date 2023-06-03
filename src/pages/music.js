import React, { useState } from "react";
import axios from "axios";

function Ward(props) {
  
  const[isAdded, setIsAdded] = React.useState(false);
  const[isAddedF, setIsAddedF] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if (isAdded === false) {
      const userId = localStorage.getItem("userId");
      const wardId = props.Id;

      axios.post("https://localhost:7241/api/WardInventory", {
          AccountId: userId,
          WardId: wardId,
        })
        
    }
  };

  const onClickFav = () => {
    setIsAddedF(!isAddedF);
    if (isAddedF === false) {
      const userId = localStorage.getItem("userId");
      const wardId = props.Id;
  
      axios.post("https://localhost:7241/api/WardLiked", {
          AccountId: userId,
          WardId: wardId,
        })
    
    }
  };

    return (
      <div className="cardM">
        <img src={props.image} alt="sus"></img>
        <h5>
          <center>{props.name}</center>
        </h5>
        <h5>Цена: {props.price} руб</h5>
        <h5>Дальность: {props.radiusOfVision} </h5>
        <h5>Самоцвет: {props.samocvet} </h5>
        <h5>Тип: {props.status} </h5>

        <img className="butad" style={{ width: "32px", height: "32px",margin:"5px" }} onClick={onClickPlus} src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"} alt="Add to cart" />
        { <img className="butad" style={{ width: "32px", height: "32px",margin:"5px" }} onClick={onClickFav} src={isAddedF ? "/logo/favon.svg" : "/logo/favoff.svg"} alt="Add to cart" /> }
      </div>
      
    );
  


}
export default Ward;