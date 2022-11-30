import BrandLogo from "./BrandLogo";
import { bcs, mainFamily, novenaIntro } from "../assets";

const Intro = () => {
  return (
    <>
      <div className="introModal">
        <div className="introContent">
          <BrandLogo src={bcs} />
          <div className="familyImage">
            <img src={mainFamily} alt="family" />
          </div>
          <div className="novenaImage">
            <img src={novenaIntro} alt="novena" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
