import { FC } from "react";

interface BrandLogoProps {
  src?: string;
}

const BrandLogo: FC<BrandLogoProps> = ({ src }) => {
  return (
    <>
      <div className="brandLogo">
        <img src={src} alt="" />
      </div>
    </>
  );
};

export default BrandLogo;
