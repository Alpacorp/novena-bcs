import "./Components.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          Banco Caja Social, su banco amigo |{" "}
          {new Date().getFullYear().toString()}
        </p>
      </div>
    </>
  );
};

export default Footer;
