import { FC } from "react";
import { Link } from "react-router-dom";
import "./Components.css";

interface BackProps {
  url?: any;
  src?: string;
  alt?: string;
}

const Back: FC<BackProps> = ({ src, url, alt }) => {
  return (
    <>
      <Link to={url}>
        <img src={src} alt="Volver" title="Volver" className="back" />
      </Link>
    </>
  );
};

export default Back;
