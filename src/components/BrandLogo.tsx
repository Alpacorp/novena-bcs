import { FC } from "react";

interface BrandLogoProps {
  src?: string;
  alt?: string;
}

const BrandLogo: FC<BrandLogoProps> = ({ src, alt }) => {
  return (
    <>
      <div className="brandLogo">
        <img src={src} alt={alt} title={alt} />
      </div>
    </>
  );
};

export default BrandLogo;
