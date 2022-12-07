import { Link } from "react-router-dom";
import "./Pages.css";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  MainTitle,
  bcs,
  buenVecino,
} from "../assets";
import BrandLogo from "../components/BrandLogo";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header show={false} />
      <BrandLogo src={bcs} alt="Banco Caja Social, su Banco Amigo" />
      <BrandLogo src={MainTitle} alt="novena de aguinaldos" />
      <p className="instructive">Sigue cada paso y reza en familia</p>
      <div className="mainMenu">
        <Link to="/stepone" className="menuOption">
          <img
            src={one}
            alt="step one"
            title="Paso 1, oración para todos los días"
          />
        </Link>
        <Link to="/steptwo" className="menuOption">
          <img src={two} alt="step two" title="Paso 2, lectura para hoy" />
        </Link>
        <Link to="/stepthree" className="menuOption">
          <img
            src={three}
            alt="step three"
            title="Paso 3, oración a la santísima virgen"
          />
        </Link>
        <Link to="/stepfour" className="menuOption">
          <img src={four} alt="step four" title="Paso 4, oración a San José" />
        </Link>
        <Link to="/stepfive" className="menuOption">
          <img src={five} alt="step five" title="Paso 5, los gozos" />
        </Link>
        <Link to="/stepSix" className="menuOption">
          <img src={six} alt="step six" title="Paso 6, oración al niño Jesús" />
        </Link>
        <Link to="/stepseven" className="menuOption">
          <img src={seven} alt="step seven" title="Paso 7, villancicos" />
        </Link>
      </div>
      <div className="buenVecino">
        <img src={buenVecino} alt="buen vecino" />
      </div>
    </>
  );
};

export default Home;
