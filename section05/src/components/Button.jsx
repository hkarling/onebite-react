const Button = ({ text, color, children }) => {
  //   console.log(props);
  // event handler
  const onClickEvent = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      onClick={onClickEvent}
      // onMouseEnter={onClickEvent}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
