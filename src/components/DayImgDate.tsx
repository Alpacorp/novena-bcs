const DayImgDate = (image: any) => {
  return (
    <>
      <div className="dayImg">
        <img src={image.image} alt={image.textImage} />
      </div>
    </>
  );
};

export default DayImgDate;
