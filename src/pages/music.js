import React, { useState } from "react";
import axios from "axios";

function Ward(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedF, setIsAddedF] = useState(false);
  const [isFavClicked, setIsFavClicked] = useState(false);
  const [counter, setCounter] = useState(1);
  const userId = localStorage.getItem("userId");

  const onClickPlus = () => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      setIsAdded(!isAdded);
      if (isAdded === false) {
        const userId = localStorage.getItem("userId");
        const wardId = props.Id;

        axios.post("https://localhost:7241/api/WardInventory", {
          AccountId: userId,
          WardId: wardId,
          Quantity: counter, // Используем значение счетчика как количество записей
        });
      }
      setCounter(1); // Обнуляем счетчик после добавления в корзину
    }
  };

  const onClickFav = async () => {
    if (!userId) {
      window.location.href = "/login";
    } else {
      if (!isFavClicked) {
        setIsAddedF(!isAddedF);
        const wardId = props.Id;

        await axios.post("https://localhost:7241/api/WardLiked", {
          AccountId: userId,
          WardId: wardId,
        });

        setIsFavClicked(true); // Блокируем повторное нажатие на кнопку
      }
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="cardM">
      <img src={props.image} alt="sus" />
      <h5>
        <center>{props.name}</center>
      </h5>
      <h5>Цена: {props.price} руб</h5>
      <h5>Дальность: {props.radiusOfVision}</h5>
      <h5>Самоцвет: {props.samocvet}</h5>
      <h5>Тип: {props.status}</h5>

      <div className="aboba123">
      <div className="counter">
        <button className="counterBtn" onClick={decrementCounter}>
          -
        </button>
        <span className="counterValue">{counter}</span>
        <button className="counterBtn" onClick={incrementCounter}>
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
        src={isAddedF ? "/logo/favon.svg" : "/logo/favoff.svg"}
        alt="Add to cart"
      />
      </div>
    </div>
  );
}

export default Ward;
