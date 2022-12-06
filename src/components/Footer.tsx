import "./Components.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          Banco Caja Social, Su Banco Amigo |{" "}
          {new Date().getFullYear().toString()}
        </p>
      </div>
    </>
  );
};

export default Footer;
