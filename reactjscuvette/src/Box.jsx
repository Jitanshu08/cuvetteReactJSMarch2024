const Box = (props) => {
  const { widthValue, heightValue, backgroundColorValue, marginValue } = props;
  return (
    <>
      <div
        className="container"
        style={{
          width: widthValue,
          height: heightValue,
          backgroundColor: backgroundColorValue,
          margin: marginValue,
        }}
      ></div>
    </>
  );
};

export default Box;
