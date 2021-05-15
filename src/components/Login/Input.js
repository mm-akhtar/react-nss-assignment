import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.formControl} ${
        props.isValid === true ? classes.valid : ""
      }`}
    >
      <div className={classes.flexm}>
        <div className={classes.icon}>
          <img src={props.img} alt="a icon" />
        </div>
        <div className={classes.input}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
      </div>
    </div>
  );
});

export default Input;
