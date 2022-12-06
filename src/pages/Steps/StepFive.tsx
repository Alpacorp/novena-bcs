import { useState } from "react";
import DayImgDate from "../../components/DayImgDate";
import Slide from "../../components/Slide";
import { data } from "../../data/data.json";
import { beforeIcon, afterIcon, fivePage } from "../../assets";
import Header from "../../components/Header";

const StepFive = () => {
  const [counter, setCounter] = useState(0);

  let dataInfo = data.filter((item) => item.id === counter);

  const next = () => {
    setCounter(counter + 1);
  };

  const before = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={fivePage} textImage="step five" />
        <h2>Los Gozos</h2>
        <Slide />
        {counter === 0 ? "" : `${counter} de 12`}
        <br />
        <div className="stepText">
          <p className="gozos">
            {!dataInfo || dataInfo.length === 0 ? "" : dataInfo[0].message}
          </p>
          <small>Coro </small>
          <br />
          <small>!Ven a nuestras almas,</small>
          <small>ven no tardes tanto!</small>
          {/* <br /> */}
          <div className="buttons">
            {counter <= 0 ? (
              ""
            ) : (
              <img
                src={beforeIcon}
                onClick={before}
                className="buttonBefore"
                alt="icon before"
              />
            )}
            {counter < 12 ? (
              <img
                src={afterIcon}
                onClick={next}
                className="buttonAfter"
                alt="icon after"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFive;
