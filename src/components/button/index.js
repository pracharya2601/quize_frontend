import { fromPairs } from "lodash";
import {StyledButton} from './button.styles';

const Button = ({
    children,
    onClick,
    color,
    outlined,
    disabled
}) => {
    return (
        <StyledButton 
            color={disabled ? 'default' : color}
            outline={outlined}
            onClick={() => onClick && onClick()}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    )
}

export default Button;