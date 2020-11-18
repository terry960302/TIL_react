import React from 'react'
import "./styles/Button.css"

type ButtonProps = {
    children : any;
    type : "button" | "submit" | "reset" | undefined;
    onClick : () => void;
    buttonStyle : string;
    buttonSize : string;
    buttonColor : string;
}

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLORS = ['primary', 'blue', 'red', 'green'];

function Button({children, type, onClick, buttonStyle, buttonSize, buttonColor} : ButtonProps) {
    
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0];
    const checkButtonColor = COLORS.includes(buttonColor)? buttonColor : COLORS[0];
    
    return (
        <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
    )
}

Button.defaultProps = {
    children: null,
    type: null,
    onClick : () => console.log("clicked button!"),
    buttonStyle : null,
    buttonSize : null,
    buttonColor : null,
}

export default Button
