import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import classes from "./Button.module.scss";

type Props = {
  isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, onClick, isDisabled }: Omit<Props, "style" | "className">) => {
  const onClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
    return onClick && onClick(e);
  };
  return isDisabled ? (
    <button className={classes.button} disabled>
      {children}
    </button>
  ) : (
    <button className={classes.button} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
