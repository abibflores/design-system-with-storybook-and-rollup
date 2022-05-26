import React, { FC } from "react";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = () => {
    return (
        <button type="button">click me</button>
    );
};

export default Button;