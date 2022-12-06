import Back from "../../components/Back";
import "./Sings.css";
import backButtonIcon from "../../assets/components/volver.svg";
import Header from "../../components/Header";

const Anton = () => {
  return (
    <>
      <Header show={false} />
      <div className="steps">
        <Back url="/stepseven" src={backButtonIcon} />
        <h2>Anton Tiruliruliru</h2>
        <div className="stepText sings">
          <div className="text-sing">
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
          </div>
          <div className="text-sing">
            <p>Jesús al pesebre vamos a adorar</p>
            <p>Jesús al pesebre vamos a adorar</p>
          </div>
          <div className="text-sing">
            <p>Duérmete niño chiquito</p>
            <p>Que la noche viene ya</p>
            <p>Cierra pronto tus ojitos</p>
            <p>Que el viento te arrullará</p>
          </div>
          <div className="text-sing">
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
          </div>
          <div className="text-sing">
            <p>Jesús al pesebre vamos a adorar</p>
            <p>Jesús al pesebre vamos a adorar</p>
          </div>
          <div className="text-sing">
            <p>Duérmete niño chiquito</p>
            <p>Que tu madre velará</p>
            <p>Cierra pronto tus ojitos</p>
            <p>Porque la entristecerás</p>
          </div>
          <div className="text-sing">
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
            <p>Antón Tiruliru Liru</p>
            <p>Antón Tiruliru-rá</p>
          </div>
          <div className="text-sing">
            <p>Jesús al pesebre vamos a adorar</p>
            <p>Jesús al pesebre vamos a adorar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anton;
