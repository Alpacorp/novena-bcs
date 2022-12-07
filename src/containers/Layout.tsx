import { FC, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setShowIntro(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 7000);
  }, []);

  return (
    <>
      {showIntro && <Intro />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
