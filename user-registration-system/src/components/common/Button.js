import React from 'react'

const Button = ({
    name,
    onClick,
    className
}) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >{name}
        </button>
    )
}

export default Button