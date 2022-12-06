import Back from "../../components/Back";
import backButtonIcon from "../../assets/components/volver.svg";
import Header from "../../components/Header";

const Tutaina = () => {
  return (
    <>
      <Header show={false} />
      <div className="steps">
        <Back url="/stepseven" src={backButtonIcon} />
        <h2>Tutaina</h2>
        <div className="stepText">
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
          <div className="text-sing">
            <p>Los pastores de Belén</p>
            <p>Vienen a adorar al niño</p>
            <p>La Virgen y San José</p>
            <p>Los reciben con cariño</p>
          </div>
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
          <div className="text-sing">
            <p>Tres reyes vienen también</p>
            <p>Con incienso, mirra y oro</p>
            <p>A ofrendar a Dios su bien</p>
            <p>Con el más grande tesoro</p>
          </div>
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
          <div className="text-sing">
            <p>Vamos todos a cantar</p>
            <p>Con amor y alegría</p>
            <p>Porque acaba de llegar</p>
            <p>De los cielos el Mesías</p>
          </div>
          <div className="text-sing">
            <p>Tutaina tuturuma</p>
            <p>Tutaina tuturumaina</p>
            <p>Tutaina tuturuma turuma</p>
            <p>Tutaina tuturumaina</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutaina;
