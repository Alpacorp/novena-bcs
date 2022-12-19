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
      <BrandLogo src={bcs} alt="Banco Caja Social, Su Banco Amigo" />
      <BrandLogo src={MainTitle} alt="novena de aguinaldos" />
      <p className="instructive">Sigue cada paso y reza en familia</p>
      <div className="mainMenu">
        <Link to="/novena/oracion-para-todos-los-dias" className="menuOption">
          <img
            src={one}
            alt="paso uno"
            title="Paso 1, oración para todos los días"
          />
        </Link>
        <Link to="/novena/lectura-para-hoy" className="menuOption">
          <img src={two} alt="paso dos" title="Paso 2, lectura para hoy" />
        </Link>
        <Link to="/novena/oracion-a-la-santisima-virgen" className="menuOption">
          <img
            src={three}
            alt="paso tres"
            title="Paso 3, oración a la santísima virgen"
          />
        </Link>
        <Link to="/novena/oracion-a-san-jose" className="menuOption">
          <img
            src={four}
            alt="paso cuatro"
            title="Paso 4, oración a San José"
          />
        </Link>
        <Link to="/novena/los-gozos" className="menuOption">
          <img src={five} alt="paso cinco" title="Paso 5, los gozos" />
        </Link>
        <Link to="/novena/oracion-al-nino-jesus" className="menuOption">
          <img
            src={six}
            alt="paso seis"
            title="Paso 6, oración al niño Jesús"
          />
        </Link>
        <Link to="/novena/villancicos" className="menuOption">
          <img src={seven} alt="villancicos" title="Paso 7, villancicos" />
        </Link>
      </div>
      <div className="buenVecino">
        <img src={buenVecino} alt="buen vecino" />
      </div>
    </>
  );
};

export default Home;
