import React from 'react';

type buttonType = {
    title: string
}

function Button({title}: buttonType) {
    return (
        <button>{title}</button>
    );
}

export default Button;
