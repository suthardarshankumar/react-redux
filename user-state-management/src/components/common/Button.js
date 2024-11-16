import React from 'react'

const Button = ({
    name,
    onClick,
    className
}) => {
    return (
        <>
            <button
                className={className}
                onClick={onClick}>
                {name}
            </button>
        </>
    )
}

export default Button