import Back from "../../components/Back";
import backButtonIcon from "../../assets/components/volver.svg";
import Header from "../../components/Header";

const Peces = () => {
  return (
    <>
      <Header show={false} />
      <div className="steps">
        <Back url="/stepseven" src={backButtonIcon} />
        <h2>Los peces en el río</h2>
        <div className="stepText">
          <div className="text-sing">
            <p>Pero mira cómo beben los peces en el río</p>
            <p>Pero mira cómo beben por ver al Dios nacido</p>
            <p>Beben y beben y vuelven a beber</p>
            <p>Los peces en el río por ver a Dios nacer.</p>
          </div>
          <div className="text-sing">
            <p>La Virgen está lavando</p>
            <p>Y tendiendo en el romero</p>
            <p>Los pajaritos cantando</p>
            <p>Y el romero floreciendo.</p>
          </div>
          <div className="text-sing">
            <p>Pero mira cómo beben los peces en el río</p>
            <p>Pero mira cómo beben por ver al Dios nacido</p>
            <p>Beben y beben y vuelven a beber</p>
            <p>Los peces en el río por ver a Dios nacer.</p>
          </div>
          <div className="text-sing">
            <p>La Virgen se está peinando</p>
            <p>Entre cortina y cortina</p>
            <p>Los cabellos son de oro</p>
            <p>Y el peine de plata fina.</p>
          </div>
          <div className="text-sing">
            <p>Pero mira cómo beben los peces en el río</p>
            <p>Pero mira cómo beben por ver al Dios nacido</p>
            <p>Beben y beben y vuelven a beber</p>
            <p>Los peces en el río por ver a Dios nacer.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peces;
