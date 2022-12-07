import BrandLogo from "./BrandLogo";
import { bcs, MainTitle, intro } from "../assets";
import { FC } from "react";

const Intro: FC = () => {
  return (
    <>
      <div className="introModal">
        <div className="introContent">
          <BrandLogo src={bcs} />
          <div className="familyImage">
            <img
              src={intro}
              alt="Bienvenida del Buen Vecino"
              title="Bienvenida del Buen Vecino"
            />
          </div>
          <div className="novenaImage">
            <img
              src={MainTitle}
              alt="Novena de Aguinaldos"
              title="Novena de Aguinaldos"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
