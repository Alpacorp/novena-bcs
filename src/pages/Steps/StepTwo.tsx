import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  dayone,
  daytwo,
  daythree,
  dayfour,
  dayfive,
  daysix,
  dayseven,
  dayeight,
  daynine,
  twoPage,
} from "../../assets";
import DayImgDate from "../../components/DayImgDate";
import Header from "../../components/Header";
import "./Steps.css";

const StepTwo: FC = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate src={twoPage} alt="Paso 2" />
        <h2>Elige la lectura para hoy</h2>
        <div className="calendar">
          <Link to="/novena/lectura-para-hoy/16">
            <DayImgDate src={dayone} alt="16 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/17">
            <DayImgDate src={daytwo} alt="17 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/18">
            <DayImgDate src={daythree} alt="18 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/19">
            <DayImgDate src={dayfour} alt="19 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/20">
            <DayImgDate src={dayfive} alt="20 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/21">
            <DayImgDate src={daysix} alt="21 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/22">
            <DayImgDate src={dayseven} alt="22 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/23">
            <DayImgDate src={dayeight} alt="23 de diciembre" />
          </Link>
          <Link to="/novena/lectura-para-hoy/24">
            <DayImgDate src={daynine} alt="24 de diciembre" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
