import React from 'react';
import './Button.css';


type buttonType = {
    title: string
    onClick?: () => void
}

function Button({title, onClick}: buttonType) {
    return (
        <button onClick={onClick} className="Button">{title}</button>
    );
}

export default Button;
