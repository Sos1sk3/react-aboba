import React, { useState } from "react";

function land(props) {
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
        <h5>Стиль: {props.Style}</h5>
        <h5>Описание: {props.Description} </h5>
        <button onClick={handleClick} className="buttonH">
          {buttonText}
        </button>
      </div>
    );
  }
  return <BuyButton />;
}
export default land;