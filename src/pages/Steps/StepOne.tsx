import { onePage, reading } from "../../assets";
import DayImgDate from "../../components/DayImgDate";
import Header from "../../components/Header";
import Slide from "../../components/Slide";

const StepOne = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate src={onePage} alt="Paso 1" />
        <h2>Oración para todos los días</h2>
        <Slide />
        <div className="stepText">
          <p>
            Benignísimo Dios de infinita caridad, que tanto amasteis a los
            hombres, que les disteis en vuestro Hijo la mejor prenda de vuestro
            amor, para que hecho hombre en las entrañas de una Virgen, naciese
            en un pesebre para nuestra salud y remedio; yo, en nombre de todos
            los mortales, os doy infinitas gracias por tan soberano beneficio.{" "}
          </p>
          <p>
            En retorno de él, os ofrezco la pobreza, humildad, y demás virtudes
            de vuestro Hijo humanado, suplicándoos por sus divinos méritos, por
            las incomodidades con que nació, por las tiernas lágrimas que
            derramó en el pesebre, dispongáis nuestros corazones con humildad
            profunda, con amor encendido, con total desprecio de todo lo
            terreno, para que Jesús recién nacido tenga en ellos su cuna y more
            eternamente.
          </p>
          <p>Amén</p>
          <small>
            Se reza tres veces el Gloria al Padre
            <img
              src={reading}
              alt="lectura"
              title="lectura"
              className="reading"
            />
          </small>
        </div>
      </div>
    </>
  );
};

export default StepOne;
