import React from "react";
import { RButton } from "./button.styled";

const Button = ({ text, onClick, variant }) => {
  return (
    <RButton onClick={onClick} variant={variant}>
      {text}
    </RButton>
  );
};

export default Button;

