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

const StepTwo = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate src={twoPage} alt="Paso 2" />
        <h2>Elige la lectura para hoy</h2>
        <div className="calendar">
          <Link to="/dayone">
            <DayImgDate src={dayone} alt="16 de diciembre" />
          </Link>
          <Link to="/daytwo">
            <DayImgDate src={daytwo} alt="17 de diciembre" />
          </Link>
          <Link to="/daythree">
            <DayImgDate src={daythree} alt="18 de diciembre" />
          </Link>
          <Link to="/dayfour">
            <DayImgDate src={dayfour} alt="19 de diciembre" />
          </Link>
          <Link to="/dayfive">
            <DayImgDate src={dayfive} alt="20 de diciembre" />
          </Link>
          <Link to="/daysix">
            <DayImgDate src={daysix} alt="21 de diciembre" />
          </Link>
          <Link to="/dayseven">
            <DayImgDate src={dayseven} alt="22 de diciembre" />
          </Link>
          <Link to="/dayeight">
            <DayImgDate src={dayeight} alt="23 de diciembre" />
          </Link>
          <Link to="/daynine">
            <DayImgDate src={daynine} alt="24 de diciembre" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
