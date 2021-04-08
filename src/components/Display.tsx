const Display = (props) => {
  return (
    <div className="display">
      <span className="memory">{props.memory}</span>
      <span>{props.value}</span>
    </div>
  );
};

export default Display;
