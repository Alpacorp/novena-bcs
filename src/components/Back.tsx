import { Link } from "react-router-dom";
import "./Components.css";

const Back = (url: string | any) => {
  return (
    <>
      <Link to={url.url}>
        <img src={url.src} alt="volver" className="back" />
      </Link>
    </>
  );
};

export default Back;
