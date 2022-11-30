import Back from "./Back";
import "./Components.css";
import backButton from "../assets/components/botonvolver.svg";

const Header = ({ show }: any) => {
  const showBack = show;
  return (
    <div className="header">
      {showBack ? <Back url="/" src={backButton} /> : ""}
    </div>
  );
};

export default Header;
