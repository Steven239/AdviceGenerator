import React, { useEffect, useState } from "react";
import PatterDivider from "../images/pattern-divider-desktop.svg";
import Dice from "../images/icon-dice.svg";
import WebFont from "webfontloader";
import * as AdviceServices from "./Services";

function AdviceTemp() {
  const [advice, setAdvice] = useState({
    id: "",
    advice: "",
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope"],
      },
    });
    AdviceServices.AdviceOfTheDay()
      .then(onGetAdviceSuccess)
      .catch(onGetAdviceError);
  }, []);

  const onButtonSubmit = (e) => {
    AdviceServices.AdviceOfTheDay()
      .then(onGetAdviceSuccess)
      .catch(onGetAdviceError);
  };

  const onGetAdviceSuccess = (response) => {
    console.log(response.data.slip);
    let adviceData = response.data.slip;
    let id = adviceData.id;
    let advice = adviceData.advice;

    setAdvice((prevState) => {
      const cardAdvice = { ...prevState };

      cardAdvice.id = id;
      cardAdvice.advice = advice;
      return cardAdvice;
    });
  };

  const onGetAdviceError = (response) => {
    console.log(response);
  };

  return (
    <div className="container">
      <div className="advice-cont">
        <h6 className="adviceNum-font">{`ADVICE # ${advice.id}`}</h6>
      </div>
      <div className="advice-cont">
        <p className="font-style">{`"${advice.advice}"`}</p>
      </div>
      <div className="advice-cont">
        <img className="divider-img" src={PatterDivider} alt="Divider" />
      </div>
      <button onClick={onButtonSubmit} className="button-style">
        <img className="dice-style" src={Dice} alt="dice" />
      </button>
    </div>
  );
}

export default AdviceTemp;
