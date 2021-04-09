import Display from "./Display";
import Button from "./Button";
import { useState } from "react";
import { buttonsHandler } from "../buttonsHandler";
const CalcUI = () => {
  const [value, setValue] = useState("");
  const [mValue, setMvalue] = useState("0");
  return (
    <div
      className="calc-body"
      onClick={(ev) => {
        const expRegex = /^-?\d+\.?\d+?$/;
        const node = ev.target;
        switch (node.innerText) {
          case "mr":
            setValue(mValue);
            return;
          case "mc":
            setMvalue("0");
            return;
          case "m-":
            if (value === "" || !value.match(expRegex)) return;
            setMvalue((+mValue - +value).toString());
            return;
          case "m+":
            if (!value.match(expRegex)) {
              setMvalue((+mValue + +value).toString());
              return;
            }
            if (value === "") return;
            setMvalue((+mValue + +value).toString());
            return;
        }
        if (
          node.parentNode.classList.contains("calc-button") ||
          node.classList.contains("calc-button")
        ) {
          setValue(buttonsHandler(node.innerText, value, mValue));
        }
      }}
    >
      Calculator
      <Display value={value} memory={mValue} />
      <div className="row">
        <Button value="AC" />
        <Button value="+/-" />
        <Button value="%" />
        <Button value="/" />
      </div>
      <div className="row">
        <Button value="mc" />
        <Button value="mr" />
        <Button value="m-" />
        <Button value="m+" />
      </div>
      <div className="row">
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="x" />
      </div>
      <div className="row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" />
      </div>
      <div className="row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" />
      </div>
      <div className="row">
        <Button value="0" />
        <Button value="." />
        <Button value="=" />
      </div>
    </div>
  );
};

export default CalcUI;
