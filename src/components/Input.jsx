import React from 'react'

const Input = ({ name, type, placeholder, onChangeFunc, className }) => {
    return (
        <input name={name} type={type} placeholder={placeholder} onChange={(e) => { onChangeFunc(e) }} className={className} />
    )
}

export default Input
