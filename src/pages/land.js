import React, { useState } from "react";
import axios from "axios";

function Land(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedF, setIsAddedF] = useState(false);
  const [counter, setCounter] = useState(1); // Счетчик для количества добавляемых вещей
  const userId = localStorage.getItem("userId");

  const onClickPlus = async () => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      setIsAdded(!isAdded);
      if (isAdded === false) {
        const landId = props.Id;

        await axios.post("https://localhost:7241/api/LandInventory", {
          AccountId: userId,
          LandId: landId,
          Quantity: counter,
        });
      }
      setCounter(1); // Обнуляем счетчик после добавления в корзину
    }
  };

  const onClickFav = async () => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      setIsAddedF(!isAddedF);
      if (isAddedF === false) {
        const landId = props.Id;

        await axios.post("https://localhost:7241/api/LandLiked", {
          AccountId: userId,
          LandId: landId,
        });
      }
    }
  };

  const handleCounterChange = (value) => {
    // Обработчик изменения значения счетчика
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
      <h5>Цена: {props.Price} руб</h5>
      <h5>Стиль: {props.Style}</h5>
      <h5>Описание: {props.Description}</h5>
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
      {
        <img
          className="butad"
          style={{ width: "32px", height: "32px", margin: "5px" }}
          onClick={onClickFav}
          src={isAddedF ? "/logo/favon.svg" : "/logo/favoff.svg"}
          alt="Add to cart"
        />
      }
    </div>
  );
}

export default Land;
