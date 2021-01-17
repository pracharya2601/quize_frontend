const Input = ({
    label,
    value,
    type,
    id,
    name,
    placeholder,
    autoComplete,
    onChange,
    errorText,
}) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                value={value}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={onChange}
            />
            {errorText && <p>{errorText}</p>}
        </div>
    )
}

export default Input;