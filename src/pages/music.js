import React, { useState } from "react";

function Music(props) {
  function BuyButton() {
    const [buttonText, setButtonText] = useState("Купить");

    function handleClick() {
      if (buttonText === "Добавлено") {
        setButtonText("Купить");
      } else {
        setButtonText("Добавлено");
      }
    }
    return (
      <div className="cardM">
        <img src={props.ImageUrl} alt="sus"></img>
        <h4>
          <center>{props.title}</center>
        </h4>
        <h5>Цена: {props.Price} руб</h5>
        <h5>Дальность: {props.Range} к/м </h5>
        <h5>Самоцвет: {props.Gem} </h5>
        <h5>Тип: {props.ObsSen} </h5>
        <button onClick={handleClick} className="buttonH">
          {buttonText}
        </button>
      </div>
    );
  }
  return <BuyButton />;
}

export default Music;