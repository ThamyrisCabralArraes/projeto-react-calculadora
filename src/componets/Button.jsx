import React from 'react';
import './Button.css';

const Button = (props) => {
  let classes = 'button';
  classes += props.double ? 'double' : '';
  classes += props.triple ? 'triple' : '';
  classes += props.operation ? 'operation' : '';

  return (
    <button
      onClick={(e) => props.click && props.click(console.log(props.label))}
      className={classes}
    >
      {props.label}
    </button>
  );
};

export default Button;
