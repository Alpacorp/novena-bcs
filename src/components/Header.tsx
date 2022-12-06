import Back from "./Back";
import "./Components.css";
import backButton from "../assets/components/volver.svg";
import { FC } from "react";

interface HeaderProps {
  show?: boolean;
}

const Header: FC<HeaderProps> = ({ show }) => {
  const showBack = show;
  return (
    <div className="header">
      {showBack ? <Back url="/" src={backButton} /> : ""}
    </div>
  );
};

export default Header;
