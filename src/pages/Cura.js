import React, { useState } from "react";
import axios from "axios";

function Cura(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedF, setIsAddedF] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);
  const [counter, setCounter] = useState(1);
  const userId = localStorage.getItem("userId");

  const onClickPlus = async () => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      setIsAdded(!isAdded);
      if (isAdded === false) {
        const courierId = props.Id;

        await axios.post("https://localhost:7241/api/CourierInventory", {
          AccountId: userId,
          CourierId: courierId,
          Quantity: counter,
        });
      }
      setCounter(1);
    }
  };

  const onClickFav = async () => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      if (!isFavClicked) {
        setIsAddedF(!isAddedF);
        const courierId = props.Id;

        await axios.post("https://localhost:7241/api/CourierLiked", {
          AccountId: userId,
          CourierId: courierId,
        });

        setIsFavClicked(true);
      }
    }
  };

  const handleCounterChange = (value) => {
    if (value >= 1) {
      setCounter(value);
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
      <h5>Рейтинг: {props.Rating}</h5>
      <div className="counter">
        <button
          className="counterBtn"
          onClick={() => handleCounterChange(counter - 1)}
        >
          -
        </button>
        <span className="counterValue">{counter}</span>
        <button
          className="counterBtn"
          onClick={() => handleCounterChange(counter + 1)}
        >
          +
        </button>
      </div>
      <img
        className="butad"
        style={{ width: "32px", height: "32px", margin: "5px" }}
        onClick={onClickPlus}
        src={isAdded ? "/logo/pic/pluscheck.svg" : "/logo/pic/plusbutt.svg"}
        alt="Add to cart"
      />
      <img
        className="butad"
        style={{ width: "32px", height: "32px", margin: "5px" }}
        onClick={onClickFav}
        src={isAddedF ? "/logo/pic/pluscheck.svg" : "/logo/favoff.svg"}
        alt="Add to cart"
        disabled={isFavClicked}
      />
    </div>
  );
}

export default Cura;
