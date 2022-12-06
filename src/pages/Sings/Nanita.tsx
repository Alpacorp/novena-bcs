import Back from "../../components/Back";
import backButtonIcon from "../../assets/components/volver.svg";
import Header from "../../components/Header";

const Nanita = () => {
  return (
    <>
      <Header show={false} />
      <div className="steps">
        <Back url="/stepseven" src={backButtonIcon} />
        <h2>La Nanita Nana</h2>
        <div className="stepText">
          <div className="text-sing">
            <p>A la nanita nana, nanita ella, nanita ella</p>
            <p>Mi niña tiene sueño, bendito sea, bendito sea</p>
            <p>A la nanita nana, nanita ella, nanita ella</p>
            <p>Mi niña tiene sueño, bendito sea, bendito sea</p>
          </div>
          <div className="text-sing">
            <p>Fuentecita que corre clara y sonora</p>
            <p>Ruiseñor que en la selva, cantando y llora</p>
            <p>Calla mientras la cuna, se balancea</p>
            <p>A la nanita nana, nanita ella</p>
          </div>
          <div className="text-sing">
            <p>A la nanita nana, nanita ella, nanita ella</p>
            <p>Mi niña tiene sueño, bendito sea, bendito sea</p>
          </div>
          <div className="text-sing">
            <p>Fuentecita que corre clara y sonora</p>
            <p>Ruiseñor que en la selva, cantando y llora</p>
            <p>Calla mientras la cuna, se balancea</p>
            <p>A la nanita nana nanita ella</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nanita;
