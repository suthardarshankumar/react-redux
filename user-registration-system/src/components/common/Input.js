import React from 'react'

const Input = ({
    type = 'text',
    className,
    placeholder,
    value,
    onChange
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={onChange}
            required
        />
    )
}

export default Input