import { sevenPage } from "../../assets";
import { Link } from "react-router-dom";
import DayImgDate from "../../components/DayImgDate";
import Header from "../../components/Header";

const StepSeven = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate src={sevenPage} alt="Paso 7" />
        <h2>Elige un villancico para cantar</h2>
        <div className="sings">
          <Link to="/anton" id="anton" title="Anton Tiruliruliru">
            Anton Tiruliruliru
          </Link>
          <Link to="/tutaina" id="tutaina" title="Tutaina">
            Tutaina
          </Link>
          <Link to="/nanita" id="nanita" title="La Nanita Nana">
            La Nanita Nana
          </Link>
          <Link to="/campana" id="campana" title="Campana sobre campana">
            Campana sobre campana
          </Link>
          <Link to="/peces" id="peces" title="Los peces en el río">
            Los peces en el río
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepSeven;
