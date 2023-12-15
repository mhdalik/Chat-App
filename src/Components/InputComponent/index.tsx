import React from 'react'

const InputComponent = ({data}: any) => {
    const {className, label, value, placeHolder, type} = data
    return (
        <section className={className} key={value}>
            <label htmlFor={value}> {label} </label>
            <input type={type} name={value} id={value} placeholder={placeHolder}/>
        </section>
    )
}
export default InputComponent
