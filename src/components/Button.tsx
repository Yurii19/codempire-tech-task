const Button = (props) => {
  return (
    <div>
      <div
        className="calc-button"
        style={props.value === "0" ? { width: "90px" } : {}}
      >
        <span>{props.value}</span>
      </div>
    </div>
  );
};

export default Button;
