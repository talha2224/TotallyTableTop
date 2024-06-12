import React from 'react'

const Input = ({ name, type, placeholder, onChangeFunc, className,onFocusFunction }) => {
    return (
        <input  onFocus={onFocusFunction} name={name} type={type} placeholder={placeholder} onChange={(e) => { onChangeFunc(e) }} className={className} />
    )
}

export default Input
