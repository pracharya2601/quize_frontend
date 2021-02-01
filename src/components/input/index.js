import {MainContainer,StyledInput, StyledLabel, StyledError} from './input.styles';
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
        <MainContainer>
            {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
            <StyledInput
                value={value}
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={onChange}
            />
            {errorText && <StyledError>{errorText}</StyledError>}
        </MainContainer>
    )
}

export default Input;