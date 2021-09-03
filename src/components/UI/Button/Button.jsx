import React from 'react';
import cl from './Button.module.css'

const Button = ({children, red, ...props}) => {
    return (
        <button {...props} className={red ? `${cl.button} ${cl.red}`: cl.button}>
            <h4>{children}</h4>
        </button>
    );
};

export default Button;