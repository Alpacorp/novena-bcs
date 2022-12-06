import { FC } from "react";

interface DayImgDateProps {
  src?: string;
  alt?: string;
}

const DayImgDate: FC<DayImgDateProps> = ({ src, alt }) => {
  return (
    <>
      <div className="dayImg">
        <img src={src} alt={alt} title={alt} />
      </div>
    </>
  );
};

export default DayImgDate;
